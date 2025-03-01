import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_get_books(client):
    response = client.get('/api/books?q=harry+potter')
    assert response.status_code == 200
    assert isinstance(response.json, list)
    assert all('title' in book and 'author' in book and 'cover' in book for book in response.json)

from flask import Flask, jsonify, request
import os
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)


# Google Books API key
GOOGLE_BOOKS_API_KEY = os.getenv('GOOGLE_BOOKS_API_KEY')

@app.route('/api/books', methods=['GET'])
def get_books():
    query = request.args.get('q', 'fiction')  # Default query is 'fiction'
    url = f'https://www.googleapis.com/books/v1/volumes?q={query}&key={GOOGLE_BOOKS_API_KEY}'
    
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for bad responses
        data = response.json()
        books = data.get('items', [])
        
        # Simplify the data for the frontend
        simplified_books = []
        for book in books:
            volume_info = book.get('volumeInfo', {})
            simplified_books.append({
                'id': book.get('id'),
                'title': volume_info.get('title', 'Unknown Title'),
                'author': ', '.join(volume_info.get('authors', ['Unknown Author'])),
                'cover': volume_info.get('imageLinks', {}).get('thumbnail', 'https://via.placeholder.com/150')
            })
            print(f"Google Books API Key: {GOOGLE_BOOKS_API_KEY}")

        
        return jsonify(simplified_books)
    
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=7001)
    #0.0.0.0 makes the flask accessible inside the docker network

    # Remove pagination params for now
    # start_index = int(request.args.get('startIndex', 0))  # Default start index is 0
    # max_results = int(request.args.get('maxResults', 21))  # Default to 21 per page

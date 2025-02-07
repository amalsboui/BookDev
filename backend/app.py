from flask_cors import CORS
from flask import Flask, jsonify, request
import os
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

GOOGLE_BOOKS_API_KEY = os.getenv('GOOGLE_BOOKS_API_KEY')

@app.route('/api/books', methods=['GET'])

def get_books():
    query = request.args.get('q', 'fiction')  # Default query is 'fiction'
    start_index = int(request.args.get('startIndex', 0))  # Default start index is 0
    # i can make a random generator for start_index to make the results random
    max_results = int(request.args.get('maxResults', 21))  # Default to 21 per page

    url = f'https://www.googleapis.com/books/v1/volumes?q={query}&startIndex={start_index}&maxResults={max_results}&key={GOOGLE_BOOKS_API_KEY}'
    
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()

        books = data.get('items', [])

        simplified_books = [
            {
                'id': book.get('id'),
                'title': book.get('volumeInfo', {}).get('title', 'Unknown Title'),
                'author': ', '.join(book.get('volumeInfo', {}).get('authors', ['Unknown Author'])),
                'cover': book.get('volumeInfo', {}).get('imageLinks', {}).get('thumbnail', 'https://via.placeholder.com/150')
            }
            for book in books
        ]

        # Fix: Ensure totalItems is always a number
        total_items = data.get("totalItems")
        if total_items is None:
            total_items = (start_index + len(simplified_books)) if simplified_books else 0

        return jsonify({
            "totalItems": total_items,
            "books": simplified_books
        })

    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print(f"Using API Key: {GOOGLE_BOOKS_API_KEY}")
    app.run(debug=True)

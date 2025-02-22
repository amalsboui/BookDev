import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import SearchBar from './SearchBar';

const BookGrid = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('fiction'); // Default query

  // Function to fetch books based on search query
  const fetchBooks = async (searchQuery) => {
    try {
      const response = await fetch(`http://localhost:7001/api/books?q=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch books whenever the search query changes
  useEffect(() => {
    fetchBooks(query);
  }, [query]);

  // Handle search input change
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  // Show loading message
  if (loading) {
    return (
      <div className="container mx-auto py-12 text-center">
        <p className="text-accent">Loading books...</p>
      </div>
    );
  }

  // Show error message
  if (error) {
    return (
      <div className="container mx-auto py-12 text-center">
        <p className="text-accent">Error: {error}</p>
      </div>
    );
  }

  // Render the books grid
  return (
    <div className="container mx-auto py-12">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            cover={book.cover}
          />
        ))}
      </div>
       {/* Pagination Controls */}
       {/*}
       <div className="flex justify-center mt-8">
        <button
          className="px-4 py-2 mr-4 bg-gray-300 rounded"
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {page + 1}</span>
        <button
          className="px-4 py-2 ml-4 bg-gray-300 rounded"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={(page + 1) * maxResults >= totalItems}
        >
          Next
        </button>
      </div>*/}
    </div>
  );
};

export default BookGrid;

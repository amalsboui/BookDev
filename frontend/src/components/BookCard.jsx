import React from 'react';
import PropTypes from 'prop-types'; 
const BookCard = ({ title, author, cover }) => {
  return (
    <div className="bg-primary p-4 rounded-lg shadow-md flex flex-col w-full max-w-xs mx-auto">
      {/* Image Container with fixed aspect ratio */}
      <div className="aspect-[4/5]">
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Text Container */}
      <div className="mt-3 text-center">
        <h3 className="text-dark font-bold text-lg">
          {title || "Unknown Title"}
        </h3>
        <p className="text-secondary">
          {author || "Unknown Author"}
        </p>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  cover: PropTypes.string
};

export default BookCard;

const BookCard = ({ title, author, cover }) => {
  return (
    <div className="bg-primary p-4 rounded-lg shadow-md flex flex-col w-full max-w-xs aspect-[4/5] mx-auto">
      {/* Book Cover */}
      <img
        src={cover}
        alt={title}
        className="w-full h-full object-cover rounded-md mb-3"
      />

      {/* Book Title */}
      <h3 className="text-dark font-bold text-lg text-center">
        {title || "Unknown Title"}
      </h3>

      {/* Author Name */}
      <p className="text-secondary text-center">{author || "Unknown Author"}</p>
    </div>
  );
};

  
  export default BookCard;
import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const { title, genre, language, director, releaseDate } = movie;
  const [likes, setLikes] = useState(100);
  const [dislikes, setDislikes] = useState(50);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-4 flex">
      <div className="w-2/3">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>Genre: {genre}</p>
        <p>Language: {language}</p>
        <p>Director: {director}</p>
        <p>Release Date: {releaseDate}</p>
        <div className="flex items-center mt-4">
          <button
            onClick={handleLike}
            className="bg-green-500 text-white px-2 py-1 rounded-md mr-2"
          >
            👍 {likes}
          </button>
          <button
            onClick={handleDislike}
            className="bg-red-500 text-white px-2 py-1 rounded-md"
          >
            👎 {dislikes}
          </button>
        </div>
      </div>
      <div className="w-1/3 ml-4">
        <img
          src="https://hoblist.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fhoblist%2Fmovies%2Fposter%2F1557299149870_Maine_Pyar%20Kiyajpg&w=1920&q=75"
          alt="Movie Poster"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default MovieCard;

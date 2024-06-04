import React from 'react';
import Header from './Header';
import MovieCard from './MovieCard';
import movieData from './movieData.json';

const HomePage = () => {
  const movies = movieData.movies;

  return (
    <div>
      <Header />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-xl font-bold mb-4">Movie Information</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
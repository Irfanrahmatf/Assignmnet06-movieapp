import * as React from 'react';

function Movie({ movie }) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150x150"}
        alt={movie.Title}
        className="w-full h-52 object-cover"
      />
      <div className="bg-orange-500 text-white p-2">
        <h3 className="text-sm font-bold text-center truncate">{movie.Title}</h3>
      </div>
    </div>
  );
}

export default Movie;
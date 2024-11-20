import * as React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Movie from './components/Movie';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'http://www.omdbapi.com/';

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchMovies = async (queries) => {
    setLoading(true);
    setError(null);
    try {
      const moviePromises = queries.map(async (query) => {
        const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${query}`);
        if (response.data.Response === "True") {
          return response.data.Search;
        } else {
          console.error(`Error fetching movies for query: ${query}`, response.data.Error);
          return [];
        }
      });

      const movieResults = await Promise.all(moviePromises);
      const flattenedMovies = movieResults.flat().filter(movie => movie.Poster !== "N/A");
      setMovies(flattenedMovies);
    } catch (error) {
      setMovies([]);
      setError('Error fetching movies');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchMovies(['Goodfellas', 'Napoleon', 'Saving Private Ryan']); // Load a default set of movies
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchMovies([query]);
  };

  return (
    <div className="App">
      <Header title="FindMove" onSearch={handleSearch} />
      <div className="container mx-auto py-4">
        <h1 className="text-3xl md:text-4xl font-regular text-blue-800 mb-5 px-4 sm:px-6 md:px-8 lg:px-10">Show movie</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 px-4 sm:px-6 md:px-8 lg:px-10">
          {movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
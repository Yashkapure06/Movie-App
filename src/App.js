import React, { useState, useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import Moviecard from "./MovieCard";
// 693ace1a

const API_URL = "https://www.omdbapi.com?apikey=Your api key";

const movie1 = {
  Title: "Superman, Spiderman or Batman",
  Year: "2011",
  imdbID: "tt2084949",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie App</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
            src={searchIcon} 
            alt="search" 
            onClick={() =>searchMovies(searchTerm)} 
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Moviecard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No moives Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

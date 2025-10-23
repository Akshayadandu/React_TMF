import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";
import React from "react";

function App() {
  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      margin: 0,
      padding: 0,
    },
    navbar: {
      backgroundColor: "#222",
      color: "white",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    navLinks: {
      display: "flex",
      gap: "15px",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "18px",
    },
    searchContainer: {
      backgroundColor: "white",
      padding: "15px",
      textAlign: "center",
    },
    searchInput: {
      width: "60%",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    movieContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px",
    },
    movieCard: {
      backgroundColor: "white",
      width: "250px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
      padding: "10px",
    },
    movieImage: {
      width: "100%",
      borderRadius: "10px",
    },
    rating: {
      fontWeight: "bold",
      color: "#ff9800",
    },
  };

  const movies = [
    { title: "Inception", poster: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg", rating: 8.8, description: "A thief who steals corporate secrets using dream-sharing technology." },
    { title: "Interstellar", poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg", rating: 8.6, description: "A team travels through a wormhole in search of a new home for humanity." },
    { title: "The Dark Knight", poster: "https://m.media-amazon.com/images/I/51k0qa6q5-L._AC_.jpg", rating: 9.0, description: "Batman faces his greatest enemy, the Joker." },
    { title: "Avatar", poster: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg", rating: 7.8, description: "A marine becomes part of the Na'vi tribe on Pandora." },
    { title: "Titanic", poster: "https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SY679_.jpg", rating: 7.9, description: "A love story aboard the RMS Titanic." },
    { title: "Avengers Endgame", poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", rating: 8.4, description: "Avengers assemble to reverse Thanos' actions." },
    { title: "Spider-Man: No Way Home", poster: "https://m.media-amazon.com/images/I/81zM2e7HkwL._AC_SY679_.jpg", rating: 8.3, description: "Peter Parker faces the multiverse consequences." },
    { title: "Joker", poster: "https://m.media-amazon.com/images/I/81GqtNbs+PL._AC_SL1500_.jpg", rating: 8.5, description: "A failed comedian descends into madness." },
  ];

  return (
    <div style={styles.body}>
      <div style={styles.navbar}>
        <h1>🎬 MovieZone</h1>
        <div style={styles.navLinks}>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>Popular</a>
          <a href="#" style={styles.link}>Trending</a>
          <a href="#" style={styles.link}>Contact</a>
        </div>
      </div>

    
      <div style={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Search movies (UI only, not functional)" 
          style={styles.searchInput} 
        />
      </div>

      <div style={styles.movieContainer}>
        {movies.map((movie, index) => (
          <div key={index} style={styles.movieCard}>
            <img src={movie.poster} alt={movie.title} style={styles.movieImage} />
            <h2>{movie.title}</h2>
            <p style={styles.rating}>⭐ {movie.rating}</p>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <MovieList />
    </>
  );
}

export default App;

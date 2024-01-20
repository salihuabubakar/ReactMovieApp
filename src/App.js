import React, {useState, useEffect} from "react";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
const App = ()=> {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favouriteMovie, setFavouriteMovie] = useState([]);
  const getMovies = (searchValue) => {
    fetch("https://api.themoviedb.org/3/search/movie?query=" + searchValue + "&include_adult=false&language=en-US&page=1&api_key=b43dded92e20f1716140754e423fb79d")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results)
      if(data.results) {
        setMovies(data.results);
      }
    })
  }
  useEffect(()=> {
    getMovies(searchValue);
  }, [searchValue]);

  const saveToLocalStorage = (movie) => {
    localStorage.setItem("Movies", JSON.stringify(movie))
  }

  useEffect(()=> {
    const favouriteMovies = JSON.parse(localStorage.getItem("Movies"))
    if (favouriteMovies) {
      setFavouriteMovie(favouriteMovies);
    }
  }, [])

  const handleAddBtn = (movie) => {
      const newF = [...favouriteMovie, movie]
      setFavouriteMovie(newF);
      saveToLocalStorage(newF)
  }

  const handleRemoveBtn = (movie)=> {
    const removeF = favouriteMovie.filter((favourite)=> 
      favourite.imdbID !== movie.imdbID
    );
    setFavouriteMovie(removeF)
    saveToLocalStorage(removeF);
  }

  return (
    <div>
      <Header heading="Movie List" />
      <Box searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList btnText="Add To Favourite List" movies={movies} onAdd={handleAddBtn} />
      <Header heading="Favourites Movie List" />
      <MovieList
        btnText="Remove Favourite Movie"
        movies={favouriteMovie}
        onAdd={handleRemoveBtn}
      />
    </div>
  );
}

export default App;

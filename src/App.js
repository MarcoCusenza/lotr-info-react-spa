import "./css/App.scss";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

import BooksContext from "./contexts/BooksContext";
import MoviesContext from "./contexts/MoviesContext";
import CharactersContext from "./contexts/CharactersContext";
import useAxios from "./hooks/useAxios";

import Header from "./components/sections/Header/Header";
import Main from "./components/sections/Main/Main";
import Footer from "./components/sections/Footer/Footer";

function App() {
  const [books, setBooks] = useState({});
  const [movies, setMovies] = useState({});
  const [characters, setCharacters] = useState({});

  const { data: allBooks, isLoadingBooks, errorBooks } = useAxios("book", "", "");
  const { data: allMovies, isLoadingMovies, errorMovies } = useAxios("movie", "", "");
  const { data: allCharacters, isLoadingCharacters, errorCharacters } = useAxios("character", "", "");

  useEffect(() => {
    const booksContext = {
      books: allBooks,
      isLoadingBooks,
      errorBooks,
    };

    const moviesContext = {
      movies: allMovies,
      isLoadingMovies,
      errorMovies,
    };

    const charactersContext = {
      characters: allCharacters,
      isLoadingCharacters,
      errorCharacters,
    };

    setBooks(booksContext);
    setMovies(moviesContext);
    setCharacters(charactersContext);

    // console.log("a", allBooks, allMovies, allCharacters);
  }, [allBooks, isLoadingBooks, errorBooks, allMovies, isLoadingMovies, errorMovies, allCharacters, isLoadingCharacters, errorCharacters]);

  return (
    <BrowserRouter>
      <BooksContext.Provider value={books}>
        <MoviesContext.Provider value={movies}>
          <CharactersContext.Provider value={characters}>
            <Header />
            <Main />
            <Footer />
          </CharactersContext.Provider>
        </MoviesContext.Provider>
      </BooksContext.Provider>
    </BrowserRouter>
  );
}

export default App;

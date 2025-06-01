import { useState } from "react";

import css from "./App.module.css"
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import { fetchMovies } from "../../services/movieService";
import { type Movie } from "../../types/movie"


export default function App() {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

    const openModal = (movies: Movie) => {
        setSelectedMovie(movies);
    };

    const closeModal = () => {
        setSelectedMovie(null);
    };

    const handleSearch = async (newQuery: string) => {
        const newMovies = await fetchMovies(newQuery);
        setMovies(newMovies)
    }

    return (
        <div className={css.app}>
            <SearchBar onSearch={handleSearch} />
            <MovieGrid onSelect={openModal} movies={movies} /> 
            <MovieModal onClose={closeModal} movie={selectedMovie} />
        </div>
        
    )
}
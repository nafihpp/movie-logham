import { useContext } from "react";
import { Search } from "../../components/Search/Search";
import "./HomePage.scss";
import { MovieContext } from "../../context/MovieContext";
import { MovieCards } from "../../components/MovieCards/MovieCards";
import { useState } from "react";
import { useEffect } from "react";

export const HomePage = () => {
    const { movies } = useContext(MovieContext);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterMovies, setFilterMovies] = useState([]);

    useEffect(() => {
        if (searchQuery == "") {
            setFilterMovies(movies);
        }
        if (searchQuery !== "") {
            let filteredMovies = movies.filter((movie) =>
                movie.title.toLowerCase().includes(searchQuery)
            );
            setFilterMovies(filteredMovies);
        }
    }, [searchQuery]);
    return (
        <div>
            <div className="search-container">
                <Search
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>
            <div className="wrapper">
                <div className="movie-container">
                    {filterMovies &&
                        filterMovies?.map((movie) => (
                            <MovieCards movie={movie} />
                        ))}
                </div>
            </div>
        </div>
    );
};

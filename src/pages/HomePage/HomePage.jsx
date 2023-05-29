import { useContext } from "react";
import { Search } from "../../components/Search/Search";
import "./HomePage.scss";
import { MovieContext } from "../../context/MovieContext";
import { MovieCards } from "../../components/MovieCards/MovieCards";

export const HomePage = () => {
    const { movies } = useContext(MovieContext);
    return (
        <div>
            <div className="search-container">
                <Search />{" "}
            </div>
            <div className="wrapper">
                <div className="movie-container">
                    {movies &&
                        movies?.map((movie) => <MovieCards movie={movie} />)}
                </div>
            </div>
        </div>
    );
};

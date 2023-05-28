import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const API_BASE = import.meta.env.VITE_API_BASEURL;
    const API_KEYS = import.meta.env.VITE_API_KEY;

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = () => {
        axios
            .get(API_BASE + `/3/trending/movie/week?api_key=${API_KEYS}`)
            .then((response) => {
                setMovies(response?.data?.results);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    );
};

import "./MovieCards.scss";

export const MovieCards = ({ movie }) => {
    return (
        <div className="movie-card-container">
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt="img"
                width="100%"
                height="100%"
            />
        </div>
    );
};

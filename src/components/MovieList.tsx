import { useState } from "react";
import movies from "./getMovies";
import "./styles/MovieList.css";

const MovieList = () => {
  const [page, setPage] = useState([1]);
  const movie = movies.results;
  return (
    <div className="movie-list-cont">
      <div className="movie-list-heading">Trending</div>
      <div className="movie-list">
        {movie.map((ele, index) => (
          <div className="movie-card" key={ele.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${ele.backdrop_path}`}
            />
            <div className="add-to-fav-btn">
              <span className="material-icons">favorite</span>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <div className="prev-page-list">
          <span className="material-icons">arrow_back_ios</span>
        </div>
        {page.map((ele) => (
          <div className="page-btns">{ele}</div>
        ))}
        <div className="next-page-list">
          <span className="material-icons">arrow_forward_ios</span>
        </div>
      </div>
    </div>
  );
};

export default MovieList;

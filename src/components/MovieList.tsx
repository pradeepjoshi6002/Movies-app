import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/MovieList.css";

interface Movie {
  id: number;
  backdrop_path: String;
}

const MovieList = () => {
  const [movie, setMovie] = useState<Movie[]>([]);
  const [pages, setPages] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=080e9a72bf874244519a5422595f07d8&language=en-US&page=${currentPage}`
        );
        setMovie(res.data.results);
      } catch (err) {
        console.log(err);
        console.log(currentPage);
        setMovie([]);
      }
    };
    fetchData();
  }, [currentPage]);

  function handleClick(req: number) {
    if (req === 0) {
      setCurrentPage(currentPage + 1);
      setPages([...pages, currentPage + 1]);
    } else if (req === -1) {
      if (currentPage - 1 != 0) {
        setCurrentPage(currentPage - 1);
        const data = pages.splice(pages.length - 1, 1);
        setPages([...data]);
      }
    } else {
      setCurrentPage(req);
      setPages([...pages.slice(0, req)]);
    }
  }

  function addTofav(indx: number) {
    const currentFavorites = localStorage.getItem("movie");
    const parsedFavorites = currentFavorites
      ? JSON.parse(currentFavorites)
      : [];

    const isMovieInFavorites = parsedFavorites.some(
      (fav: Movie) => fav.id === movie[indx].id
    );

    if (!isMovieInFavorites) {
      const updatedFavorites = [...parsedFavorites, movie[indx]];
      localStorage.setItem("movie", JSON.stringify(updatedFavorites));
    } else {
      console.log("Movie is already in favorites");
    }
  }

  return (
    <div className="movie-list-cont">
      <div className="movie-list-heading">Trending</div>
      <div className="movie-list">
        {movie.map((ele, index) => (
          <div className="movie-card" key={ele.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${ele.backdrop_path}`}
            />
            <div className="add-to-fav-btn" onClick={() => addTofav(index)}>
              <span className="material-icons">favorite</span>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <div className="prev-page-list" onClick={() => handleClick(-1)}>
          <span className="material-icons">arrow_back_ios</span>
        </div>

        {pages.map((ele) => (
          <div className="page-btns" key={ele} onClick={() => handleClick(ele)}>
            {ele}
          </div>
        ))}

        <div className="next-page-list" onClick={() => handleClick(0)}>
          <span className="material-icons">arrow_forward_ios</span>
        </div>
      </div>
    </div>
  );
};

export default MovieList;

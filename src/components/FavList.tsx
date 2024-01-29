import { useEffect, useState } from "react";
import "./styles/FavList.css";
import { json } from "stream/consumers";

type Movie = {
  id: number;
  backdrop_path: string;
  title: string;
  vote_average: number;
  genre_ids: number[];
  popularity: number;
};

const getLocalMovies = () => {
  const storedData = localStorage.getItem("movie");
  const data = storedData ? JSON.parse(storedData) : [];
  return data;
};

export default function FavList() {
  const [favlist, setFavlist] = useState(getLocalMovies());

  useEffect(() => {
    localStorage.setItem("movie", JSON.stringify(favlist));
  }, [favlist]);

  const handleDelete = (indx: number) => {
    console.log(indx);
    favlist.splice(indx, 1);
    setFavlist([...favlist]);
  };
  return (
    <div className="favlist-cont">
      <div className="favlist-top-row">
        <input type="text" className="search-box" placeholder="search" />
        <input
          type="text"
          className="fav-list-width"
          placeholder="list-width 1-9"
        />
      </div>

      <div className="favlist-table">
        <div className="favlist-table-heading">
          <div className="favlist-title-heading">Title</div>
          <div className="favlist-genre">Genre</div>
          <div className="favlist-popularity">Popularity</div>
          <div className="favlist-rating">Rating</div>
          <div className="favlist-delete-btn"></div>
        </div>
        {favlist.map((ele: Movie, index: number) => (
          <div className="favlist-table-row" key={ele.id}>
            <div className="favlist-title">
              <img
                className="favlist-table-row-img"
                src={`https://image.tmdb.org/t/p/original${ele.backdrop_path}`}
                alt="not-showing"
              />
              <div className="favlist-table-row-title">{ele.title}</div>
            </div>
            <div className="favlist-genre">Action</div>
            <div className="favlist-popularity">{ele.popularity}</div>
            <div className="favlist-rating">{ele.vote_average}</div>
            <div className="favlist-delete-btn">
              <button onClick={() => handleDelete(index)}>delete</button>
              <span
                className="material-icons del-btn"
                onClick={() => handleDelete(index)}
              >
                delete
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

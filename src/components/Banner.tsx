import "./styles/Banner.css";
import movies from "./getMovies";
import { useState } from "react";

export default function Banner() {
  const [bannerIndx, setBannerIndx] = useState(0);
  const movie = movies.results;
  return (
    <div className="banner-cont">
      <img
        className="banner-img-cont"
        src={`https://image.tmdb.org/t/p/original${movie[bannerIndx].backdrop_path}`}
        alt=""
      />
      <div className="banner-img-prev">
        <span
          className="material-icons"
          onClick={() =>
            setBannerIndx(
              bannerIndx - 1 < 0 ? movie.length - 1 : bannerIndx - 1
            )
          }
        >
          arrow_back_ios
        </span>
      </div>
      <div className="banner-img-next">
        <span
          className="material-icons"
          onClick={() => setBannerIndx((bannerIndx + 1) % movie.length)}
        >
          arrow_forward_ios
        </span>
      </div>
    </div>
  );
}

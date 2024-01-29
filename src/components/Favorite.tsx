import FavList from "./FavList";
import Sidebar from "./Sidebar";
import "./styles/Favorite.css";

export default function Favorite() {
  return (
    <div className="favorite-cont">
      {/* <Sidebar /> */}
      <FavList />
    </div>
  );
}

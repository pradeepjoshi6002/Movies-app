import "./styles/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-cont">
      <div className="sidebar-options-cont">
        <div className="all-genres">All Genres</div>
        <div className="action">Action</div>
        <div className="horror">Horror</div>
        <div className="adventure">Adventure</div>
      </div>
    </div>
  );
}

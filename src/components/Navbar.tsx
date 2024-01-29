import "./styles/Navbar.css";

type NavbarProps = {
  setShowfav: () => void;
};

export default function Navbar(props: NavbarProps) {
  return (
    <div className="navbar-cont">
      <div className="navbar-heading">movies-lite</div>
      <div className="navbar-favorites">
        <div className="material-icons" onClick={props.setShowfav}>
          favorite
        </div>
      </div>
    </div>
  );
}

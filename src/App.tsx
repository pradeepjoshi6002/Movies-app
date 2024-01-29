import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import Favorite from "./components/Favorite";
import { useState } from "react";

function App() {
  const [showfav, setShowfav] = useState(false);
  return (
    <>
      <Navbar setShowfav={() => setShowfav(!showfav)} />
      {showfav ? (
        <Favorite />
      ) : (
        <>
          <Banner />
          <MovieList />
        </>
      )}
    </>
  );
}

export default App;

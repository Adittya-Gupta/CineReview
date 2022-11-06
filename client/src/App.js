import Nvbr from "./components/Navbar/Navbar";
import FilterSection from "./components/Filters/Filters";
import MovieSection from "./components/MovieSection/MovieSection";
import "./App.css";
function App() {
  return (
    <div>
      <Nvbr/>
      <div className="main-content">
        <FilterSection></FilterSection>
        <MovieSection></MovieSection>
      </div>

    </div>
  );
}

export default App;

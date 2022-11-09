import "./style.css";
import { Nav } from "react-bootstrap";
const FilterSection = () => {
    const genres = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Family", "Fantasy", "History", "Horror", "Thriller", "War", "Western"];
  return (
    <div className="main">
      <div className="title">Filters</div>
      <div className="sections">
      <Nav defaultActiveKey="/" className="flex-column">
      <div className="section">All</div>
      {genres.map((genre)=>{
          return <div className="section">{genre}</div>
     })}
        </Nav>
      </div>
    </div>
  );
};

export default FilterSection;

import "./style.css";
import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
const FilterSection  = (props) => {
    const genres = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Family", "Fantasy", "History", "Horror", "Thriller", "War", "Western"];
    const [mygenre, setMygenre] = useState("");
    useEffect(()=>{
        props.setSearchgenre(mygenre);
    },[mygenre, props])
  return (
    <div className="main">
      <div className="title">Filters</div>
      <div className="sections">
      <Nav defaultActiveKey="/" className="flex-column">
      <div className="section" onClick={()=>setMygenre('')}>All</div>
      {genres.map((genre)=>{
          return <div key={genre} className="section" onClick={()=>setMygenre(genre)}>{genre}</div>
     })}
        </Nav>
      </div>
    </div>
  );
};

export default FilterSection;

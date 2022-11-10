import "./style.css";
import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
const FilterSection  = (props) => {
    const genres = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Family", "Fantasy", "History", "Horror", "Thriller", "War", "Western"];
    const [active, setActive] = useState("All");
    const [mygenre, setMygenre] = useState("");
    useEffect(()=>{
        props.setSearchgenre(mygenre);
    },[mygenre, props])
  return (
    <div className="main">
      <div className="title">Filters</div>
      <div className="sections">
      <Nav defaultActiveKey="/" className="flex-column">
      <div className={"section"+(active==="All" ? " active" : "")} onClick={()=>{setMygenre('');setActive("All")}}>All</div>
      {genres.map((genre)=>{
          return <div key={genre} className={"section"+(active===genre ? " active" : "")} onClick={()=>{setMygenre(genre);setActive(genre)}}>{genre}</div>
     })}
        </Nav>
      </div>
    </div>
  );
};

export default FilterSection;

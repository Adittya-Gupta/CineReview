import "./style.css"
import SearchBar from "../SearchBar/SearchBar";
import MyCard from "../card/card";
import { useState } from "react";
const MovieSection = (props) => {
    // console.log(props.movies)
    const [term, setTerm] = useState('');
    let searchgenre = props.searchgenre;
    let movies = props.movies;
    if (term==='') {
        movies = Object.values(props.movies)
    .filter((key) => (key.genre.toLowerCase().includes(searchgenre.toLowerCase())));
    } else {
    movies = Object.values(props.movies)
    .filter((key) => (key.title.toLowerCase().includes(term.toLowerCase()) && key.genre.toLowerCase().includes(searchgenre.toLowerCase())));
    }
    let arr = [[]]
    for (let i = 0; i < movies.length; i+=3) {
        let l=[];
        for (let j = i; j < i+3 && j< movies.length; j++) {
            l.push(movies[j])
        }
        arr.push(l)
    }
    return ( 
        <div className="mainstyle">
            <div className="searchBar">
            <SearchBar onSearchSubmit={term => setTerm(term)} />
            </div>
            <div className="cardsarea">
                {arr.map((row)=>{
                    return <div className="myrow" key = {row}>
                        {row.map((movie)=>{
                            return <MyCard movie={movie} key = {movie.title}></MyCard>
                        })}
                    </div>
                })}
            </div>
        </div>
     );
}
 
export default MovieSection;
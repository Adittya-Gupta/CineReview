import "./style.css"
import SearchBar from "../SearchBar/SearchBar";
import MyCard from "../card/card";
const MovieSection = () => {
    const onSearchSubmit = term => {
        console.log('New Search submit', term); 
    }
    return ( 
        <div className="mainstyle">
            <div className="searchBar">
            <SearchBar onSearchSubmit={term => onSearchSubmit(term)} />
            </div>
            <div className="cardsarea">
                <MyCard></MyCard>
                <MyCard></MyCard>

            </div>
        </div>
     );
}
 
export default MovieSection;
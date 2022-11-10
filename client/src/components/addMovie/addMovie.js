import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
const AddMovie = () => {
    const genres = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Family", "Fantasy", "History", "Horror", "Thriller", "War", "Western"];
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const rating = document.getElementById("rating").value;
        const temp = document.getElementById("genre").value;
        const year = document.getElementById("year").value;
        const image = document.getElementById("image").value;
        const description = document.getElementById("description").value;
        const genre = genres[temp-1];
        const movie = {
            title,
            rating,
            genre,
            year,
            image,
            description
        };
        axios.post("http://localhost:8080/movies/add", movie).then((res)=>{
            window.location.href = "/";
            alert("Movie added successfully");
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <Form className="myForm">
        <h1 className="mytext">Add A New Movie</h1>
      <Form.Group className="mb-3">
        <Form.Label className="mytext">Title</Form.Label>
        <Form.Control type="text" placeholder="Enter the title of the Movie" id="title"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="mytext">Rating</Form.Label>
        <Form.Control type="number" placeholder="Enter the IMDB rating of the Movie" id="rating"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="mytext">Genre</Form.Label>
        <Form.Select aria-label="Default select example" id="genre">
      <option>Select Genre</option>
      <option value="1">Action</option>
      <option value="2">Adventure</option>
      <option value="3">Animation</option>
      <option value="4">Comedy</option>
      <option value="5">Crime</option>
      <option value="6">Drama</option>
      <option value="7">Family</option>
      <option value="8">Fantasy</option>
      <option value="9">History</option>
      <option value="10">Horror</option>
      <option value="11">Thriller</option>
      <option value="12">War</option>
      <option value="13">Western</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="mytext">Year</Form.Label>
        <Form.Control type="number" placeholder="Enter the Year of Release" id="year"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="mytext">Movie Description</Form.Label>
        <Form.Control as="textarea" rows={3} id="description"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="mytext">Image link</Form.Label>
        <Form.Control type="text" placeholder="Enter a link of the movie image" id="image"/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default AddMovie;

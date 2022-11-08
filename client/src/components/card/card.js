import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
import "./style.css";
const MyCard = (prop) => {
  return (
    <Card style={{ width: "30%" }} className="mystylecard">
      <Card.ImgOverlay>
      <Badge pill bg="success" className="rating">{"IMDB rating : " + prop.movie.rating}</Badge>{' '}
      <Badge pill bg="info" className="year">{prop.movie.year}</Badge>{' '}
      </Card.ImgOverlay>
      <Card.Img
        variant="top"
        src={prop.movie.image}
        height="300px"
        width="100%"
      />
      <Card.Body>
        <Card.Title>{prop.movie.title}</Card.Title>
        <Card.Text>
          {prop.movie.description}
        </Card.Text>
        <div className="clickables">
          <Button variant="outline-danger">Watch Now</Button>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="red"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </div>
        
      </Card.Body>
    </Card>
  );
};

export default MyCard;

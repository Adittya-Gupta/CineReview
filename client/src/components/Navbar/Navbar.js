import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import"./style.css"
const Nvbr = () => {
  return ( 
    <Navbar expand="lg" className="MainNav">
      <Container fluid>
        <Navbar.Brand href="#" className="my-title">CineReview</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
 
export default Nvbr;
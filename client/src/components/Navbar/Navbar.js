import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./style.css"
const Nvbr = () => {
  let navigate = useNavigate(); 
  const routeChangelogin = () =>{ 
    let path = `/login`; 
    navigate(path);
  }
  const routeChangesignup = () =>{
    let path = `/signup`;
    navigate(path);
  }
  return ( 
    <Navbar expand="lg" className="MainNav">
      <Container fluid>
        <Navbar.Brand href="/" className="my-title">CineReview</Navbar.Brand>
        <div>
        <Button variant="outline-primary" onClick={routeChangelogin}>Admin ? Login Here</Button>{' '}
        <Button variant="outline-success" onClick={routeChangesignup}>Sign Up!</Button>{' '}

        </div>
      </Container>
    </Navbar>
  );
}
 
export default Nvbr;
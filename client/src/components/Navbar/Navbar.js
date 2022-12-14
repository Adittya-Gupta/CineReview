import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';
import "./style.css"
const Nvbr = () => {
  var login = window.localStorage.getItem("isLoggedIn");
  let navigate = useNavigate(); 
  const routeChangelogin = () =>{ 
    let path = `/login`; 
    navigate(path);
  }
  const routeChangesignup = () =>{
    let path = `/signup`;
    navigate(path);
  }
  const routeChangesignout = ()=>{
    let path = `/`;
    window.localStorage.removeItem("username")
    window.localStorage.removeItem("isLoggedIn");
    navigate(path);
  }
  const routeChangeaddmovie = ()=>{
    let path = `/addmovie`;
    navigate(path);
  }
  if(login){
    return ( 
      <Navbar expand="lg" className="MainNav">
        <Container fluid>
          <Navbar.Brand href="/" className="my-title">CineReview</Navbar.Brand>
          <div>
            {(window.localStorage.getItem("username") ? <div className='welcome'>Welcome, {window.localStorage.getItem("username")}</div> : <div className='welcome'>Welcome Guest ! Login if you're admin</div>)}
          </div>
          <div>
          <Button variant="outline-success" onClick={routeChangeaddmovie}>Add a new Movie</Button>{' '}
          <Button variant="outline-danger" onClick={routeChangesignout}>Sign Out</Button>{' '}
          </div>
        </Container>
      </Navbar>
    );
  }
  else{
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
  );}
}
 
export default Nvbr;
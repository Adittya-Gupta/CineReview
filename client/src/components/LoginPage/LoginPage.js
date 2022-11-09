import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';
import "./style.css";
const LoginPage = () => {
  let navigate = useNavigate(); 
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const data = {name, password};
        axios.post("http://localhost:8080/users/login", data).then((res)=>{
          if(res.data.data==="Success"){
              window.localStorage.setItem("isLoggedIn", true);
              navigate("/");
          }
          else{
            alert(res.data)
          }
        })
    }
  return (
      <Form className="myForm">
        <h1 className="mytext">Admin Login</h1>
      <Form.Group className="mb-3">
        <Form.Label className="mytext">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="email"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="mytext">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    
  );
};

export default LoginPage;

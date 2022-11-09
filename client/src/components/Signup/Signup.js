import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const data = {username, email, password};
        console.log(data);
        axios.post("http://localhost:8080/users/signup", data).then((res)=>{
          window.localStorage.setItem("isLoggedIn", true);
          window.localStorage.setItem("username", username);
          navigate('/',{replace: true})
        }).catch((err)=>{
            if(err.response.status === 409){
                alert("There is already an account with this Username, please try again with a different Username");
            }
        })
    }
  return (
    <Form className="myForm">
        <h1 className="mytext">Sign Up</h1>
        <Form.Group className="mb-3" >
        <Form.Label className = "mytext">Enter your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter a unique Name" id="name" />
      </Form.Group>
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

export default SignUp;

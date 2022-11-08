import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Toast from 'react-bootstrap/Toast';
import "./style.css";
const LoginPage = () => {
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const data = {name, password};
        axios.post("http://localhost:8080/users/login", data).then((res)=>{
          toggleShowA()
          document.querySelector(".mytoast").innerHTML = res.data;
          // if(res.data==="Success"){
          //   toggleShowA()
          // }
          // else if(res.data==="Wrong password"){

          // }
          // else{

          // }
        })
    }
  return (
    <div>
      <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className="mytoast"></Toast.Body>
        </Toast>
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
    </div>
    
  );
};

export default LoginPage;

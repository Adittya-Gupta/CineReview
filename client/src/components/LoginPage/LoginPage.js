import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
const LoginPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const data = {email, password};
        axios.post("http://localhost:8080/users/login", data)
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

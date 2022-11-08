import Nvbr from "./components/Navbar/Navbar";
import FilterSection from "./components/Filters/Filters";
import MovieSection from "./components/MovieSection/MovieSection";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUp from "./components/Signup/Signup";
function App() {
  const [movies, setMovies] = useState("");
  const url = "http://localhost:8080/movies";
  const getMovies = async () => {
    const response = await axios.get(url);
    // console.log(response);
    setMovies(response.data);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Nvbr />
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-content">
                <FilterSection></FilterSection>
                <MovieSection movies={movies}></MovieSection>
              </div>
            }
          />
          <Route path="/login" element={<LoginPage></LoginPage>}/>
          <Route path="/signup" element={<SignUp></SignUp>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

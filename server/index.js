import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/movies.js";
const app = express();
const register = async (req, res) => {
  console.log(req.body);
  const { username,email, password } = req.body;
  if (password.length < 6) {
      return res.status(400).json({ message: "Password less than 6 characters" })
  }
  try{
      await User.create({ username,email,password }).then((user) => {
          res.status(201).json({ message: "User created successfully", user });
  });
} catch (error) {
  res.status(401).json({
      message: "User not successful created",
      error: error.mesage,
  });
}
};

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.post('/users/signup', register);
app.use("/movies", router);

const CONNECTION_URL =
  "mongodb+srv://Adittya:admin12345@cluster0.sren2qd.mongodb.net/?retryWrites=true&w=majority";
const PORT = 8080;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));




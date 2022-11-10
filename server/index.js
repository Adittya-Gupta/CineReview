import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/movies.js";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";
const app = express();
dotenv.config({path : './config.env'});
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use("/movies", router);
app.use("/users", userRouter)

const CONNECTION_URL =
  process.env.DB_URI;
const PORT = process.env.PORT;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));




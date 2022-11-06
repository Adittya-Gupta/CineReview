import Movie from "../models/movie.js";

export const getmovies = async (req, res) => {
    try{
        const movies = await Movie.find();
        console.log(movies);
        res.status(200).json(movies);
        res.send('THIS WORKS!'); 
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
 }

export const createmovies = (req, res) => {
    const movie = req.body;
    const newMovie = new Movie(movie);
    try{
        newMovie.save();
        res.status(201).json(newMovie);

    } catch(error){
        res.status(409).json({message: error.message});
    }

    res.send('POST REQUEST WORKS!');
}



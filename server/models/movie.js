import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    genre : {
        type : String,
        required : true
    },
    year : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
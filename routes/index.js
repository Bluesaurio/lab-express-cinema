const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));
router.get("/movies", async (req, res, next) => {
  try {
    const response = await Movie.find();
    res.render("movies.hbs", {
      allMovies: response,
    });
  } catch (err) {
    next(err);
  }
});
router.get("/movies/:movieId", async (req, res, next) => {
  try {
    const response = await Movie.findById(req.params.movieId);
    console.log(response);
    res.render("oneMovie.hbs", {
      detailedMovie: response,
    });
  } catch (err) {
    next(err);
  }
});
module.exports = router;

var express = require('express');
var router = express.Router();
//const fetch = require('node-fetch')

const connectionString = process.env.connectionString



router.get("/movies", (req, res) => {
   fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${connectionString}`)
 .then(response => response.json())
 .then(data => {

   res.json({movies : data.results});
 });
   });


module.exports = router;

require ("dotenv").config();
var Spotify = require('node-spotify-api');

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

//Retrieve Axios, Moment, Spotify using require() after npm install axios
var axios = require('axios');
var moment = require('moment');

//var spotify = new Spotify(keys.spotify);

 
var command = process.argv[2];
var value = process.argv[3];
var defaultMovie = "Mr.Nobody" //in case the user not providing a title

function getMovie (movieName){
    var movieName = value || defaultMovie;
    //console.log(movieName);
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    axios.get(queryURL).then(function(response){
        //console.log(response);
        var result = 
        `Title: ${response.data.Title}
        Year: ${response.data.Year}
        Rated: ${response.data.Rated}
        Released: ${response.data.Released}
        Rating: ${response.data.Ratings[1]}
        `

        console.log(result);       
    })
}

switch (command) {
    case 'movie-this':
        if(value === "") {
            value = defaultMovie;
        } else {
            getMovie(value);
        }
        break;
    
    case 'spotify-this-song':


}





require ("dotenv").config(); //Need to be placed at the top so all the API Keys will be read

var Spotify = require('node-spotify-api');


var keys = require("./keys.js"); //import keys.js module 

var spotify = new Spotify(keys.spotify); //Calling the Spotify constructor from keys.js

//Retrieve Axios, Moment, Spotify using require() after npm install axios
var axios = require('axios');
var moment = require('moment');
var fs = require ('fs');


 
var command = process.argv[2];
var value = process.argv[3];


// MOVIE
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
        Rating: ${response.data.Ratings}
        `

        console.log(result);       
    })
}


// SPOTIFY
var defaultSong = "The Sign"

function findSong (song){

    var song = value || defaultSong;
    spotify.search({
        type: 'track',
        query: 'song'},
        function (err, data) {
            //console.log(JSON.stringify(data));

            if(err){
                console.log('This is not loaded' + err)
            }
            else {
                console.log("Artist:" + data.tracks.items[0].album.artists[0].name);
                console.log("PreviewLink:" + data.tracks.items[0].album.external_urls.spotify);
                console.log("Album Name:" + data.tracks.items[0].album.name);
            }

        })
}

//BAND IN TOWN
function findConcert (band) {
    var band = value;
    console.log(band);
    var queryURL = 'https://rest.bandsintown.com/artists/'+ band + '/events?app_id=codingbootcamp&limit=3';
    axios.get(queryURL).then(function(response){
        //console.log(response);
        var eventDate = moment(response.data[0].datetime).format('MM/DD/YYYY');
        var result = `
        Artist: ${response.data[0].artist.name}
        Venue_Name: ${response.data[0].venue.name}
        Venue_Country: ${response.data[0].venue.country}
        Venue_City: ${response.data[0].venue.city}
        Event Date: ${eventDate}
        `
        console.log(result);
        
    })
    .catch(function(err){
        console.log(err);
    })
}

//DO WHAT IT SAYS
function randomCommand (random) {
    fs.readFile("random.txt", "utf8", function(err, data){
        if(err){
            console.log(err);
        } 
        console.log(data);
        data = data.split(","); //turn string into array

        var command = data[0];
        var value = data[1];

        switch (command) {
            case 'movie-this':
                getMovie(value)
            break;

            case 'spotify-this-song':
                findSong(value);
            break;

            case 'concert-this' :
                fincConcert(value);
            break;
        }


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
        if (value === "") {
            value = defaultSong;
        } else {
            findSong(value);
        }
    
    break;

    case 'concert-this':
        findConcert (value);

    
    break;

    case 'do-what-it-says' :
        randomCommand();

    break;

}





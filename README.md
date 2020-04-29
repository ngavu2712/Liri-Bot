# Liri-Bot

# LIRI - Language Interpretation and Recognition Interface

# Overview
LIRI will be a command line node app that takes in parameters and gives you back the data. 

# Challenges
Usde LIRI to search for concerts via Bands In Town, songs via Spotify and movies via OMDB

Commands:

    node liri.js concert-this "<artist/band name here>"
    Display:
        * Name of the venue
        * Venue Location
        * Date (MM/DD/YYYY)

    node liri.js movie-this "<movie name here>"
    Display: 
        * Title of the movie.
        * Year the movie came out.
        * IMDB Rating of the movie.
        * Rotten Tomatoes Rating of the movie.
        * Country where the movie was produced.
        * Language of the movie.
        * Plot of the movie.
        * Actors in the movie.
        * If no movie is provided then your program will default to     "Mr.Nobody"

    node liri.js spotify-this-song "<song name here>"
    Display:
        * Artist(s)
        * Song Title
        * Preview Link 
        * Album that the song is from
        * If no song is provided then your program will default to      "The Sign" by Ace of Base.

    node liri.js do-what-it-says
    Run spotify-this-song for "I Want it That Way,"

# Techology

Node.js

Npm Packages:

    * Axios (https://www.npmjs.com/package/axios)
    * Moment (https://www.npmjs.com/package/moment)
    * fs (https://www.npmjs.com/package/fs)
    * dotenv (https://www.npmjs.com/package/dotenv)
    * Node-Spotify-API (https://www.npmjs.com/packagenode-spotify-api)

APIs:

    * Spotify (https://developer.spotify.com/)
    * OMDB (http://www.omdbapi.com)
    * Bands In Town (http://www.artists.bandsintown.combandsintown-api)

# Demo Video

   [Click Here](https://drive.google.com/file/d/1gBkKqSToHw2X9yj4almhXkMfqtBRTKAv/view)






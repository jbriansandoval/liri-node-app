// At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

const result = dotenv.config()
 
if (result.error) {
  throw result.error
}
 
console.log(result.parsed)

// code required to import the keys.js file and store it in a variable
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// Make it so liri.js can take in one of the following commands:

// - my-tweets
// - spotify-this-song
// - movie-this
// - do-what-it-says
var a = process.argv[2];
var b = process.argv[3];

if(a === "my-tweets"){
  console.log("last 20 tweets:")
}

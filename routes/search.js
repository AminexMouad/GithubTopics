// Import Twit
var Twit = require('twit');
// Import config
var config = require('../config/config')
// for using the functions of Twit
var T = new Twit(config);

// params contents the searching topic and count
var params = { 
    q: 'reactive',
    count: 10 
}

// get is the function to search the tweet which three paramaters
T.get('search/tweets', params, searchedData);

// searchedData function is a callback function which returns the data when we make a search
function searchedData(err, data, response) {
    console.log(data.statuses.map(s => s.text));
}

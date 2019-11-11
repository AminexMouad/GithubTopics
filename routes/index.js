const express = require('express');
const axios = require('axios');
const router = express.Router();

// Import Twit
var Twit = require('twit');
// Import config
var config = require('../config/config');
// for using the functions of Twit
var T = new Twit(config);

// params contents the searching topic and count

router.get('/tweet', (req, res) => {
  // console.log('test');
  var params = {
    q: req.param('tw'),
    count: 10
  };
  // get is the function to search the tweet which three paramaters
  T.get('search/tweets', params, searchedData);

  // searchedData function is a callback function which returns the data when we make a search
  function searchedData(err, data, response) {
    // console.log(data.statuses.entities);
    // res.json(data.statuses);
    res.render('tweets', {
      keyword: req.param('tw'),
      datas: data.statuses
    });
  }
});

router.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'GitHub Api',
    datas: undefined
  });
});
router.post('/topic?:motcle', async (req, res) => {
  try {
    let config = {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json'
      }
    };
    const results = await axios.get(
      `https://api.github.com/search/repositories\?q=${req.body.motcle}`,
      config
    );
    // console.log(req.body.motcle);
    res.render('index', {
      pageTitle: 'GitHub Api',
      datas: results.data.items
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;

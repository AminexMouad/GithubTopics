const express = require('express');
const axios = require('axios');
const router = express.Router();

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
      `https://api.github.com/search/topics?q=${req.body.motcle}`,
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

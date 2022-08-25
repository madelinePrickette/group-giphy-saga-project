const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();
const axios = require('axios');

const router = express.Router();

//GIPHY SEARCH GET REQUEST COMING FROM SERVER
router.get('/:search', (req, res) => {
    console.log('cat');
    console.log(req.params);
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.params.search}&api_key=${process.env.GIPHY_API_KEY}`)
        .then( (response) => {
            res.send(response.data)
        }).catch(err => {
            console.log(err);
        })
})

module.exports = router;
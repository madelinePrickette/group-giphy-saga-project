const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();
const axios = require('axios');

const router = express.Router();

//GIPHY SEARCH GET REQUEST COMING FROM SERVER
router.get('/', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${SearchInput}&api_key=${process.env.GIPHY_API_KEY}`)
        .then( (response) => {
            res.send(response.data)
        })
})

module.exports = router;
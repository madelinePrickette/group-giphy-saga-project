const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config(); // needed when hiding keys to apis.
const axios = require('axios'); // needed when making requests

const router = express.Router();

//GIPHY SEARCH GET REQUEST COMING FROM SERVER
router.get('/:search', (req, res) => { // this /:search contains what the user typed in to search
    console.log('cat');
    console.log(req.params); // this is an object with a key of search which contains a value {search: cats}
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.params.search}&api_key=${process.env.GIPHY_API_KEY}`)
    // this is the giphy link, it takes the object of req.params and pulls the value of search out and places it here.
    // this also holds the giphy key
        .then( (response) => {
            res.send(response.data) // these are all the giphs recieved from the giphy api along with every version of gif. a lot of stuff.
        }).catch(err => {
            console.log(err); // catching an error
        })
})

module.exports = router;
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM favorite';
    pool.query(queryText)
      .then( result => {
        res.send(result.rows);
        res.sendStatus(200);
      }).catch( err => {
        console.log(err);
      })
  });

// add a new favorite
router.post('/', (req, res) => {
  console.log("req.body !!!!!", req.body.url);
  const newFavGif = req.body.url

  const queryText = 
  `
  INSERT INTO favorite ("url")
  VALUES ($1)
  `
  const queryValues = [newFavGif];

  pool.query(queryText, queryValues)
    .then( () => {res.sendStatus(201)})
    .catch( (err) => {
      console.error('error in SERVER POST', err)
      res.sendStatus(500);
    })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const queryText = `
  UPDATE "favorite"
  SET "category_id" = $2
  WHERE "id" = $1;`;
  const queryValues = [req.params.favId, req.body.category];

  pool.query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(204);
    }).catch( (err) => {
      console.log(err);
    })

  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;

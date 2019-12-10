const express = require('express');
const bodyParser = require('body-parser');
const dbHelper = require('../db/dbhelpers')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("/Users/derickpark/Product-Description/client/dist"));

app.get('/product', (req, res) => {
  dbHelper((err, result) => {
    if (err) {
      console.log('ERROR', err)
      res.status(404).send('ERROR')
    } else {
      console.log('RESULT', JSON.stringify(result))
      res.status(200).send(result)
    }
  })
})

const port = 3000;
app.listen(port, () => console.log(`Connected to port ${port}`));
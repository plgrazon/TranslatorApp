const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// database
require('../db/config');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

app.listen(PORT, err => {
  if (err) {
    console.log('server error not listening');
  }
  console.log('listening to PORT ', PORT);
});

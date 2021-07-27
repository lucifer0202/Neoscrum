require('./dbConnection');

const express = require("express");
const bp = require('body-parser')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

//Import Routes
const routes = require('./routes');

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
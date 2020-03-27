var express = require('express');
var app = express();


const intiliaseRouter = require('./router.js');
const initialiseDatabaseConnection = require('./connect-database.js');

intiliaseRouter(app);
initialiseDatabaseConnection();

app.listen(3010, function() {
    console.log('listening on 3010')
  })


  module.exports = app;
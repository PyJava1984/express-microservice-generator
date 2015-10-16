'use strict';

/*
 * Dependencies
 */
var express = require('express');
var micro   = require('../');

var app  = express();

app.use(micro({
  discoverable: true,
  debug: true
}));

app.listen(8000, function onListen() {
  console.log('example app initialised and serving at the following root: http://localhost:8000/<%= microservice %>');
});

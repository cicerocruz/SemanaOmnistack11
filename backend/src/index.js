const express = require("express");
const cors = require('cors');
const routers = require('./routes');

const app = express();

var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    //corsOptions = { origin: false } // disable CORS for this request
    callback(null, corsOptions) // callback expects two parameters: error and options
  }

  app.use(cors());
//app.use(cors(corsOptionsDelegate));
app.options('*', cors(corsOptionsDelegate)) // include before other routes

app.use(express.json());

app.use(routers);

app.listen(3333);
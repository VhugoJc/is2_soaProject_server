const express = require('express');
const bodyparser = require('body-parser');
const app = express();

//load routings
const travelPackageRoutes = require('./routers/travelPackageRouter');

//config
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//headers config:
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });


  //basic router:
app.use(`/api`,travelPackageRoutes);

module.exports = app;
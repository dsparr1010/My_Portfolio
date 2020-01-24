var express = require("express");
//var router = express.Router();
const path = require("path");

module.exports = function(app) {

    app.use((req, res, next) => {
      //console.log(req.headers);
      next();
    });

    app.get('/', (req, res) => {
      res.render('index', {
        name: 'Debra'
      });
    });

    app.get('/contact', (req, res) => {
      res.render('contact');
    });

    app.use((err, request, response, next) => {
      // log the error, for now just console.log
      console.log(err)
      response.status(500).send('Something broke!')
    });

    app.listen(3000);

};
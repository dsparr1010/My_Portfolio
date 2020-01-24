const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts'})); 
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'hbs'); 

require('./routes/html-routes')(app);

app.listen(PORT, function () {
    console.log(`express server listening on: http://localhost:${PORT}`);
});
var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory

/********** PAGES **********/
//TODO: change all images to /resources path
//TODO: explore.js, login.js, signup.js
//TODO: sign up modal, just in general
//TODO: database connections and storing/retrieving data

//login page
app.get('/', function(req, res) {
  res.render('pages/login');
});
app.get('/login', function(req, res) {
  res.render('pages/login');
});

//home page
app.get('/home', function(req, res) {
  res.render('pages/home');
});

//map
app.get('/map', function(req, res) {
  res.render('pages/map');
});

//covid info page
app.get('/covid', function(req, res) {
  res.render('pages/covid');
});

//healthq
//status: should be good
app.get('/healthq', function(req, res) {
  res.render('pages/healthq');
});

//resources
app.get('/resources', function(req, res) {
  res.render('pages/resources');
});

//schedule NOT FINISHED
app.get('/schedule', function(req, res) {
  res.render('pages/schedule');
});

//search/explore
app.get('/search', function(req, res) {
  res.render('pages/search');
});

//profile NOT FINISHED
app.get('/profile', function(req, res) {
  res.render('pages/profile');
});

//settings NOT FINISHED
app.get('/settings', function(req, res) {
  res.render('pages/settings');
});

/********** PAGES DONE **********/


app.listen(3000);
console.log('go to localhost:3000');

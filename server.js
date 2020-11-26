var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory

const dbConfig = {
	host: 'localhost',
	port: 5432,
	database: 'covid_app',
	user: 'postgres',
	password: 'gogo'
};

var db = pgp(dbConfig);


/********** PAGES **********/
//TODO: change all images to /resources path
//TODO: explore page and login
//TODO: sign up modal, just in general


//login page
app.get('/', function(req, res) {
	var usernamesQuery = 'SELECT username FROM login_information;';
	db.any(usernamesQuery)
		.then(function(info) {
			res.render('pages/login', {
				usernames: info
			});
		})
		.catch(function (err) {
			console.log('error', err);
			res.render('pages/login', {
				usernames: ''
			});
		});
});
app.get('/login', function(req, res) {
	var usernamesQuery = 'SELECT username FROM login_information;';
	db.any(usernamesQuery)
		.then(function(info) {
			res.render('pages/login', {
				usernames: info
			});
		})
		.catch(function (err) {
			console.log('error', err);
			res.render('pages/login', {
				usernames: ''
			});
		});
});
app.post('/login/signup', function(req, res) {
	var name = req.body.name;
	var username = req.body.username;
	var email = req.body.email;
	var password = req.body.password;
	var usertype = "Student";
	var phone = req.body.phone
	var insertQuery = "INSERT INTO login_information(name, username, email, password, usertype, phonenumber) VALUES('" + name + "', '" + username + "', '" + email + "', '" + password + "', '" + usertype + "', '" + phonenumber + "');";
	var usernamesQuery = 'SELECT username FROM login_information;';
	db.task('get-everything', task => {
		return task.batch([
				task.any(insertQuery),
				task.any(usernamesQuery)
		]);
	}).then(info => {
		res.render('pages/login', {
			usernames: info[0]
		});
	})
	.catch(function (err) {
		console.log('error', err);
		res.render('pages/login', {
			usernames: ''
		});
	});
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
  var topLocations = "SELECT search_location FROM locations ORDER BY count DESC LIMIT 10;";
  var topSearch = "SELECT search FROM searches;";
  var faq = "SELECT question FROM faq ORDER BY count DESC LIMIT 10;";

  db.task('get-everything', task => {
    return task.batch([
	      task.any(topLocations),
	      task.any(topSearch),
	      task.any(faq)
      ]);
  })
  .then(info => {
  	res.render('pages/search', {
			locations: info[0],
			searches: info[1],
			faq: info[2] //actually currently used
		})
  })
  .catch(err => {
        console.log('error', err);
        res.render('pages/search', {
            locations: '',
            searches: '',
            faq: ''
        });
    });
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

var Food     = require('./models/food');

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express

var port = process.env.PORT || 5000;        // set our port

app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');

app.use(function(req,res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

var mongoose   = require('mongoose');
mongoose.connect('mongodb://sosergio:penbird12$@ft-cluster-shard-00-00-uh1mk.mongodb.net:27017,ft-cluster-shard-00-01-uh1mk.mongodb.net:27017,ft-cluster-shard-00-02-uh1mk.mongodb.net:27017/FoodTrackDb?ssl=true&replicaSet=ft-cluster-shard-0&authSource=admin'); // connect to our database



// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/food')
  .options(function(req, res) { 
          console.log("OPTIONS /api/Food Request");
          res.json({status:'ok'});
    })
   .get(function(req, res) { 
        console.log("GET /api/Food Request");
        Food.find(function(err, bears) {
            if (err) res.send(err);
          res.json(bears);
          console.log("Food retrieved with success");
        });
    })
    .post(function(req, res) {
        console.log("POST /api/Food Request");
        console.log(req.body);
        var food = new Food({
          identifier: 1,
          name : req.body.name,
          caloriesPer100gr : req.body.caloriesPer100gr,
          caloriesPerUnit : req.body.caloriesPerUnit
        });
        console.log("sending out");
        console.log(food);
        food.save(function(err) {
            if (err) res.send(err);
            res.json({ message: 'Food created!' });
        });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);



'use strict'
const express    = require('express');    
const bodyParser = require('body-parser');
//const morgan = require('morgan')
//const helmet = require('helmet')
const foodApi = require('../api/food-api');
const foodService = require('../application/food-app-service');
const foodRepository = require('../repository/food-repository');

const start = (serverSettings) => {
  return new Promise((resolve, reject) => {

    if (!serverSettings.port) {
      reject(new Error('The server must be started with an available port'))
    }

    const app = express();
    var router = express.Router();   

    app.use(function(req,res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //app.use(morgan('dev'))
    //app.use(helmet())

    router.use(function(req, res, next) {
        // do logging
        console.log('Something is happening.');
        next(); // make sure we go to the next routes and don't stop here
    });

    //error handler
    app.use((err, req, res, next) => {
      reject(new Error('Something went wrong!, err:' + err))
      res.status(500).send('Something went wrong!')
    })
    
    //load application services and repositories
    var fs = foodService(foodRepository);
    foodApi(router, fs);

    // all of our routes will be prefixed with /api
    app.use('/api', router);
    
    const server = app.listen(serverSettings.port, () => resolve(server))    
  })
}

module.exports = Object.assign({}, {start})
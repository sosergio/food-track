'use strict'
const status = require('http-status')

module.exports = (router, foodService) => {
  this._foodService = foodService;
  
  router.route('/food')
        .get((req, res, next) => {
            this._foodService.getAllFood().then(food => {
                res.status(status.OK).json(food);
            }).catch(next)
        })
        .post((req, res, next) => {
            var food = {
                identifier: 1,
                name : req.body.name,
                caloriesPer100gr : req.body.caloriesPer100gr,
                caloriesPerUnit : req.body.caloriesPerUnit
            };
            this._foodService.saveFood(food).then(res => {
                res.status(status.OK).json(res)
            }).catch(next)
        });
}
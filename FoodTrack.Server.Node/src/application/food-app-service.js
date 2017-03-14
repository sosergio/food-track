
'use strict'
module.exports = (foodRepository) => {
    this._foodRepository = foodRepository;
    
    const getAllFood = () => {
        return new Promise((resolve, reject) => {
            this._foodRepository.find(function(err, response) {
                if (err) reject(err);
                console.log("Food retrieved with success");
                resolve(response);
            });
        });   
    }
    const createFood = (food) => {
        return new Promise((resolve, reject) => {
            this._foodRepository.save(function(err) {
                if (err) reject(err);
                console.log("Food saved with success");
                resolve(true);
            });
        });   
    }
    return Object.create({
        getAllFood,
        createFood
    })
}
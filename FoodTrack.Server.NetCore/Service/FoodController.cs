using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using FoodTrack.Server.NetCore.Application.Queries;
using FoodTrack.Server.NetCore.Persistance;
using FoodTrack.Server.NetCore.Application.Interfaces;
using FoodTrack.Server.NetCore.Application.Commands;

namespace FoodTrack.Server.NetCore.Service
{
    [Route("api/[controller]")]
    public class FoodController : Controller
    {
        private IDatabaseService _databaseService;
        private Application.Queries.IGetFoodList _getFoodList;
        private IGetFoodById _getFoodById;
        private ICreateFood _createFood;
        private IDeleteFood _deleteFood;
        
        public FoodController()
        {
            _databaseService = new DatabaseService();
            _getFoodList = new GetFoodList(_databaseService);
            _getFoodById = new GetFoodById(_databaseService);
            _createFood = new CreateFood(_databaseService);
            _deleteFood = new DeleteFood(_databaseService);
        }

        [HttpGet]
        public IEnumerable<Domain.Food> GetAll()
        {
            return _getFoodList.Execute();
        }

        [HttpGet("{id}", Name = "GetFood")]
        public IActionResult GetById(int id)
        {
            var item = _getFoodById.Execute(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Application.Commands.CreateFoodModel item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            var id = _createFood.Execute(item);
            return CreatedAtRoute("GetFood", new { controller = "Food", id = id }, item);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
           _deleteFood.Execute(id);
        }
    }
}
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using FoodTrack.Server.NetCore.Persistance;
using FoodTrack.Server.NetCore.Application.Food;
using System;

namespace FoodTrack.Server.NetCore.Service
{
    [Route("api/[controller]")]
    public class FoodController : Controller
    {
        private IFoodAppService _foodAppService;
       
        public FoodController(IFoodAppService foodAppService)
        {
            _foodAppService = foodAppService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
               return new ObjectResult(_foodAppService.GetAllFood());
            }
            catch(Exception exc)
            {
                return new ObjectResult(exc);
            }
        }

        [HttpGet("{id}", Name = "GetFood")]
        public IActionResult GetById(int id)
        {
            var item = _foodAppService.GetFoodById(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Application.Food.CreateFoodModel item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            var id = _foodAppService.CreateFood(item);
            return CreatedAtRoute("GetFood", new { controller = "Food", id = id }, item);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
           _foodAppService.DeleteFood(id);
        }
    }
}
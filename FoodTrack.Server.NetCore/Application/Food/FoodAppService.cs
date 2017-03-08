using System;
using System.Collections.Generic;
using FoodTrack.Server.NetCore.Application.Interfaces;
using FoodTrack.Server.NetCore.Domain;

namespace FoodTrack.Server.NetCore.Application.Food
{
    public class FoodAppService : IFoodAppService
    {
        IRepository<Domain.Food> _foodRepository;
        public FoodAppService(IRepository<Domain.Food> foodRepository)
        {
            _foodRepository = foodRepository;
        }

        public int CreateFood(Application.Food.CreateFoodModel food)
        {
            return _foodRepository.Create(new Domain.Food(){
                Name = food.Name,
                CaloriesPer100gr = food.CaloriesPer100gr,
                CaloriesPerUnit = food.CaloriesPerUnit
             });
        }

        public void DeleteFood(int id)
        {
             _foodRepository.Delete(id);
        }

        public IEnumerable<Domain.Food> GetAllFood()
        {
            return _foodRepository.GetAll();
        }

        public Domain.Food GetFoodById(int id)
        {
            return _foodRepository.GetById(id);
        }

        public void UpdateFood(int id, Domain.Food food)
        {
            _foodRepository.Update(id, food);
        }
    }
}
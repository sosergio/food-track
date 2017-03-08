
using System.Collections.Generic;

namespace FoodTrack.Server.NetCore.Application.Food
{
    public interface IFoodAppService
    {
        IEnumerable<Domain.Food> GetAllFood();
        Domain.Food GetFoodById(int id);
        int CreateFood(Application.Food.CreateFoodModel food);
        void DeleteFood(int id);
        void UpdateFood(int id, Domain.Food food);
    }
}
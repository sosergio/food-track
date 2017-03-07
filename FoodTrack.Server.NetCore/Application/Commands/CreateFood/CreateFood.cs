using System.Collections.Generic;
using FoodTrack.Server.NetCore.Application.Interfaces;

namespace FoodTrack.Server.NetCore.Application.Commands
{
    public class CreateFood: ICreateFood 
    {
        IDatabaseService _database;

        public CreateFood(IDatabaseService databaseService)
        {
            _database = databaseService;
        }
        public int Execute(CreateFoodModel model)
        {
            var id = _database.Food.Count + 1;
            _database.Food.Add(new NetCore.Domain.Food(){
                   Id = id, 
                   Name = model.Name,
                   CaloriesPer100gr = model.CaloriesPer100gr,
                   CaloriesPerUnit = model.CaloriesPerUnit
            });
            _database.Save();
            return id;
        }
    }

}
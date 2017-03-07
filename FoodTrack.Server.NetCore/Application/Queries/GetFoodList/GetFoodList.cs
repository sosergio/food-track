using System.Collections.Generic;
using FoodTrack.Server.NetCore.Application.Interfaces;
using FoodTrack.Server.NetCore.Domain;
using FoodTrack.Server.NetCore.Persistance;

namespace FoodTrack.Server.NetCore.Application.Queries
{
    public class GetFoodList:IGetFoodList
    {
        IDatabaseService _database;
        public GetFoodList(IDatabaseService databaseService)
        {
            _database = databaseService;
        }
        public ICollection<NetCore.Domain.Food> Execute()
        {
            return _database.Food;
        }
    }

}
using System.Linq;
using FoodTrack.Server.NetCore.Application.Interfaces;
using FoodTrack.Server.NetCore.Persistance;

namespace FoodTrack.Server.NetCore.Application.Queries
{
    public class GetFoodById : IGetFoodById
    {
        IDatabaseService _database;
        public GetFoodById(IDatabaseService databaseService)
        {
            _database = databaseService;
        }

        public NetCore.Domain.Food Execute(int id)
        {
            return _database.Food.SingleOrDefault(x => x.Id == id);
        }
    }
}
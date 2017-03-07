using System.Collections.Generic;
using FoodTrack.Server.NetCore.Application.Interfaces;

namespace FoodTrack.Server.NetCore.Application.Commands
{
    public class DeleteFood :IDeleteFood 
    {
        IDatabaseService _database;

        public DeleteFood(IDatabaseService databaseService)
        {
            _database = databaseService;
        }
        public void Execute(int id)  
        {
            new List<Domain.Food>(_database.Food).RemoveAll(f => f.Id == id);
        }
    }

}
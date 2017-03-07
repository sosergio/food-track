using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using FoodTrack.Server.NetCore.Application.Interfaces;
using FoodTrack.Server.NetCore.Domain;
using MongoDB.Bson;
using MongoDB.Driver;

namespace FoodTrack.Server.NetCore.Persistance
{
    public class FoodRepository : IRepository<Domain.Food>
    {
        //IDatabaseService _database;
        protected static IMongoClient _client;
        protected static IMongoDatabase _database;

        public FoodRepository(IDatabaseService databaseService)
        {
            //_database = databaseService;
            _client = new MongoClient();
            _database = _client.GetDatabase("FoodTrackDB");
        }
        public int Create(Food item)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IQueryable<Food> GetAll()
        {
            throw new NotImplementedException();
        }

        public Food GetById(int id)
        {
            throw new NotImplementedException();
        }

        public IQueryable<Food> SearchFor(Expression<Func<Food, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public void Update(int id, Food item)
        {
            throw new NotImplementedException();
        }
    }

}
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
        IMongoCollection<Domain.Food> collection;

        public FoodRepository(IMongoDatabase dataContext)
        {
            collection = dataContext.GetCollection<Food>("Food");
        }
        public int Create(Food item)
        {
            var nextId = (int)collection.Count(x => x.Id != 0);
            item.Id = nextId;
            collection.InsertOne(item);
            return nextId;
        }

        public void Delete(int id)
        {
            collection.DeleteOne(x=> x.Id == id);
        }

        public IList<Food> GetAll()
        {
            return collection.Find(x => x.Id != 0, new FindOptions()).ToList();
        }

        public Food GetById(int id)
        {
            return collection.Find(x => x.Id != id, new FindOptions()).SingleOrDefault();
        }

        public IList<Food> SearchFor(Expression<Func<Food, bool>> predicate)
        {
            return collection.Find(predicate).ToList();
        }

        public void Update(int id, Food item)
        {
            throw new NotImplementedException();
        }
    }

}
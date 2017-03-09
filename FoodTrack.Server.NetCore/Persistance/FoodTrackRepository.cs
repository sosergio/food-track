using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using FoodTrack.Server.NetCore.Application.Interfaces;
using MongoDB.Driver;

namespace FoodTrack.Server.NetCore.Persistance
{
    public class FoodTrackRepository : IRepository<Domain.FoodTrack>
    {
        //IDatabaseService _database;
        IMongoCollection<Domain.FoodTrack> collection;

        public FoodTrackRepository(IMongoDatabase dataContext)
        {
            collection = dataContext.GetCollection<Domain.FoodTrack>("FoodTrack");
        }
        public int Create(Domain.FoodTrack item)
        {
            var nextId = (int)collection.Count(x => true);
            item.Identifier = nextId + 1;
            collection.InsertOne(item);
            return nextId;
        }

        public void Delete(int id)
        {
            collection.DeleteOne(x=> x.Identifier == id);
        }

        public IList<Domain.FoodTrack> GetAll()
        {
            return collection.Find(x => true, new FindOptions()).ToList();
        }

        public Domain.FoodTrack GetById(int id)
        {
            return collection.Find(x => x.Identifier == id, new FindOptions()).SingleOrDefault();
        }

        public IList<Domain.FoodTrack> SearchFor(Expression<Func<Domain.FoodTrack, bool>> predicate)
        {
            return collection.Find(predicate).ToList();
        }

        public void Update(int id, Domain.FoodTrack item)
        {
            throw new NotImplementedException();
        }
    }

}
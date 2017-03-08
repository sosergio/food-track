using FoodTrack.Server.NetCore.Application.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FoodTrack.Server.NetCore.Domain
{
    public class Food:IEntity
    {
        public ObjectId _id{get;set;}
        public int Identifier{get;set;}
        public string Name {get;set;}
        public double CaloriesPer100gr {get;set;}
        public double CaloriesPerUnit {get;set;}
    }
}
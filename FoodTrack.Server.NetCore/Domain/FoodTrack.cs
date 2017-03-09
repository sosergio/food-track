using System;
using FoodTrack.Server.NetCore.Application.Interfaces;
using MongoDB.Bson;

namespace FoodTrack.Server.NetCore.Domain
{
    public enum UnitiesOfMeasure{
        Gr,
        Unit
    }
    public class FoodTrack:IEntity
    {
        public ObjectId _id{get;set;}
        public int Identifier{get;set;}
        public int FoodId{get;set;}
        public DateTime Date {get;set;}
        public double QuantityValue {get;set;}
        public UnitiesOfMeasure UnityOfMeasure {get;set;}
    }
}
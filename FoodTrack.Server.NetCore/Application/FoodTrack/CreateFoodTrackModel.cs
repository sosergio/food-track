using System;

namespace FoodTrack.Server.NetCore.Application.FoodTrack
{
    public class CreateFoodTrackModel
    {
        public int FoodId{get;set;}
        public DateTime Date {get;set;}
        public double QuantityValue {get;set;}
        public string UnityOfMeasure {get;set;}
    }
}
using FoodTrack.Server.NetCore.Application.Interfaces;

namespace FoodTrack.Server.NetCore.Domain
{
    public class Food:IEntity
    {
        public int Id{get;set;}
        public string Name {get;set;}
        public double CaloriesPer100gr {get;set;}
        public double CaloriesPerUnit {get;set;}
    }
}
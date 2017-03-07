namespace FoodTrack.Server.NetCore.Application.Commands
{
    public class CreateFoodModel
    {
        public string Name{get;set;}
        public double CaloriesPer100gr {get;set;}
        public double CaloriesPerUnit {get;set;}
    }
}
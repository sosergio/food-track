namespace FoodTrack.Server.NetCore.Domain
{
    public class Food
    {
        public int Id{get;set;}
        public string Name {get;set;}
        public double CaloriesPer100gr {get;set;}
        public double CaloriesPerUnit {get;set;}
    }
}
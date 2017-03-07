namespace FoodTrack.Server.NetCore.Application.Commands
{
    public interface ICreateFood 
    {
        int Execute(CreateFoodModel model);   
    }

}
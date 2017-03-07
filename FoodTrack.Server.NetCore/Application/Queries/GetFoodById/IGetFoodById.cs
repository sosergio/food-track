
namespace FoodTrack.Server.NetCore.Application.Queries
{
    public interface IGetFoodById
    {
        NetCore.Domain.Food Execute(int id);
    }
}
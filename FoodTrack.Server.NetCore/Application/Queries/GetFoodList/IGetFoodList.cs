using System.Collections.Generic;

namespace FoodTrack.Server.NetCore.Application.Queries
{
    public interface IGetFoodList
    {
        ICollection<NetCore.Domain.Food> Execute();
    }
}

using System;
using System.Collections.Generic;

namespace FoodTrack.Server.NetCore.Application.FoodTrackTotal
{
    public interface IFoodTrackTotalAppService
    {
        IEnumerable<Domain.FoodTrackTotal> GetAllFoodTrackTotals(DateTime from, DateTime to);
    }
}
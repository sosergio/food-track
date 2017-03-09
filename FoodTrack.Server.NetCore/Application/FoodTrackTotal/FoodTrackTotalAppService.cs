
using System;
using System.Collections.Generic;
using System.Linq;
using FoodTrack.Server.NetCore.Application.Interfaces;

namespace FoodTrack.Server.NetCore.Application.FoodTrackTotal
{
    public class FoodTrackTotalAppService : IFoodTrackTotalAppService
    {
        private IRepository<Domain.FoodTrack> _foodTrackRepository;
        public FoodTrackTotalAppService(IRepository<Domain.FoodTrack> foodTrackRepository)
        {
            _foodTrackRepository = foodTrackRepository;
        }
        public IEnumerable<Domain.FoodTrackTotal> GetAllFoodTrackTotals(DateTime from, DateTime to)
        {
            return _foodTrackRepository
                        .SearchFor(ft => ft.Date >= from && ft.Date <= to)
                        .GroupBy(ft => ft.Date)
                        .Select(g => new Domain.FoodTrackTotal(){
                            Calories = g.Sum(x => x.QuantityValue),
                            Date = g.Key                
                        });
        }
    }
}
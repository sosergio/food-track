
using System.Collections.Generic;

namespace FoodTrack.Server.NetCore.Application.FoodTrack
{
    public interface IFoodTrackAppService
    {
        IEnumerable<Domain.FoodTrack> GetAllFoodTracks();
        Domain.FoodTrack GetFoodTrackById(int id);
        int CreateFoodTrack(Application.FoodTrack.CreateFoodTrackModel foodTrack);
        void DeleteFoodTrack(int id);
        void UpdateFoodTrack(int id, Domain.FoodTrack foodTrack);
    }
}
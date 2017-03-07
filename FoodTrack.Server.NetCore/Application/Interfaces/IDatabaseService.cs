using System.Collections.Generic;

namespace FoodTrack.Server.NetCore.Application.Interfaces
{
    public interface IDatabaseService
    {
        ICollection<NetCore.Domain.Food> Food{get;set;}
        ICollection<NetCore.Domain.FoodTrack> FoodTracks{get;set;}

        void Save();
    }
}
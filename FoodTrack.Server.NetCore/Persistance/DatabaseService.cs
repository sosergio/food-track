using System.Collections.Generic;
using FoodTrack.Server.NetCore.Application.Interfaces;

namespace FoodTrack.Server.NetCore.Persistance
{
    public class DatabaseService : IDatabaseService
    {
        public ICollection<NetCore.Domain.Food> Food { get; set;}
        public ICollection<NetCore.Domain.FoodTrack> FoodTracks { get;set; }
        public void Save()
        {}
    }
}
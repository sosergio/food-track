using System;
using System.Collections.Generic;
using FoodTrack.Server.NetCore.Application.Interfaces;
using FoodTrack.Server.NetCore.Domain;

namespace FoodTrack.Server.NetCore.Application.FoodTrack
{
    public class FoodTrackAppService : IFoodTrackAppService
    {
        IRepository<Domain.FoodTrack> _foodTrackRepository;
        public FoodTrackAppService(IRepository<Domain.FoodTrack> foodTrackRepository)
        {
            _foodTrackRepository = foodTrackRepository;
        }

        public int CreateFoodTrack(CreateFoodTrackModel foodTrack)
        {
            return _foodTrackRepository.Create(new Domain.FoodTrack(){
                Date = foodTrack.Date,
                FoodId = foodTrack.FoodId,
                QuantityValue = foodTrack.QuantityValue,
                UnityOfMeasure = (UnitiesOfMeasure)Enum.Parse(typeof(UnitiesOfMeasure),foodTrack.UnityOfMeasure)
             });
        }

        public void DeleteFoodTrack(int id)
        {
             _foodTrackRepository.Delete(id);
        }

        public IEnumerable<Domain.FoodTrack> GetAllFoodTracks()
        {
            return _foodTrackRepository.GetAll();
        }

        public Domain.FoodTrack GetFoodTrackById(int id)
        {
            return _foodTrackRepository.GetById(id);
        }

        public void UpdateFoodTrack(int id, Domain.FoodTrack foodTrack)
        {
            _foodTrackRepository.Update(id, foodTrack);
        }

    }
}
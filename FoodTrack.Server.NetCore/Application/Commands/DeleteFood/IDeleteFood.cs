namespace FoodTrack.Server.NetCore.Application.Commands
{
    public interface IDeleteFood 
    {
        void Execute(int id);   
    }

}
using System;
using System.Linq;
using System.Linq.Expressions;

namespace FoodTrack.Server.NetCore.Application.Interfaces
{
    public interface IRepository<T> where T: IEntity
    {
        IQueryable<T> SearchFor(Expression<Func<T, bool>> predicate);
        IQueryable<T> GetAll();
        int Create(T item);
        void Update(int id, T item);
        void Delete(int id);
        T GetById(int id);
    }
}
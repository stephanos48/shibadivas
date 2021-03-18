using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface IWaitlistRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Waitlist>> GetWaitlistsAsync();
        Task<Waitlist> GetWaitlist(int id);
        Task<bool> SaveChangesAsync();
    }
}
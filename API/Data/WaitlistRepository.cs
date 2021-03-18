using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class WaitlistRepository : IWaitlistRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public WaitlistRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<Waitlist>> GetWaitlistsAsync()
        {
            var waitlists = await _context.Waitlists.ToListAsync();
            return waitlists;
        }
 
        public async Task<Waitlist> GetWaitlist(int id)
        {
            var specificpn = await _context.Waitlists.FirstOrDefaultAsync(m => m.WaitlistId == id);
            return specificpn;
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }
    }
}
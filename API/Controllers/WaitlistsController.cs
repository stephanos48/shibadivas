using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class WaitlistsController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        public WaitlistsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet("getWaitlists")]
        public async Task<IActionResult> GetWaitlists()
        {

            var waitlists = await _unitOfWork.WaitlistRepository.GetWaitlistsAsync();

            var waitlistsToReturn = _mapper.Map<IEnumerable<WaitlistForReturnDto>>(waitlists);

            return Ok(waitlistsToReturn);

        }
      
        [HttpGet("{id}", Name = "getWaitlist")]
        public async Task<IActionResult> GetTxQoh(int id)
        {
            var waitlistFromRepo = await _unitOfWork.WaitlistRepository.GetWaitlist(id);

            var waitlistToReturn = _mapper.Map<WaitlistForReturnDto>(waitlistFromRepo);

            return Ok(waitlistToReturn);
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateWaitlist(int id, WaitlistForUpdateDto waitlistForUpdateDto)
        {
            var waitlistFromRepo = await _unitOfWork.WaitlistRepository.GetWaitlist(id);

            _mapper.Map(waitlistForUpdateDto, waitlistFromRepo);

            if (await _unitOfWork.WaitlistRepository.SaveAll())
                return NoContent();

            throw new Exception($"Updating Waitlist {id} failed on save");    
        }

        [HttpPost("createWaitlist")]
        public async Task<ActionResult> CreateWaitlist([FromBody]WaitlistForCreationDto waitlistForCreationDto)
        {
            if (ModelState.IsValid)
            {
                var waitlistToCreate = _mapper.Map<Waitlist>(waitlistForCreationDto);
                _unitOfWork.WaitlistRepository.Add(waitlistToCreate);

                if (await _unitOfWork.WaitlistRepository.SaveChangesAsync())
                {
                var waitlistToReturn = _mapper.Map<WaitlistForReturnDto>(waitlistToCreate);
                return CreatedAtRoute("GetWaitlist", 
                        new { controller = "Waitlists", id = waitlistToCreate.WaitlistId }, waitlistToReturn);
                }
                else
                {
                    return BadRequest("Failed to save changes to the database.");
                }   
            }

            return BadRequest(ModelState);

            /*if (await _repo.SaveAll()) {
                var customerToRetun = _mapper.Map<CustomerForReturnDto>(customer);
                return CreatedAtAction(nameof(GetCustomer), new { id = customer.CustomerId }, customerToRetun);
            }*/  
        }

        /*
        [HttpPost("editCustomer/{customerId}")]
        public async Task<IActionResult> Edit(int customerId, CustomerEditDto customerEditDto)
        {
            if (customerId != customerEditDto.CustomerId)
            {
                return NotFound();
            }
            if (ModelState.IsValid)
            {
                try
                {
                    var customerToEdit = _mapper.Map<Customer>(customerEditDto);
                    _repo.Add(customerToEdit);
                    await _repo.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!Customer(customerEditDto.CustomerId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return Ok(customerEditDto);
            }
            return Ok();
        }
        */

        /*
        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCustomer(int id)
        {
            var value = await _context.Customers.FirstOrDefaultAsync(x => x.CustomerId == id);
            return Ok(value);
        }
        */

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
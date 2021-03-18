using System;

namespace API.Entities
{
    public class Waitlist
    {
        public int WaitlistId { get; set; }
        public int WaitlistNumber { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Zip { get; set; }
        public string Status { get; set; }
        public string TimeFrame { get; set; }
        public string PuppyPreference { get; set; }
        public string SpecialRequest { get; set; }
        public string Notes { get; set; }
    }
}
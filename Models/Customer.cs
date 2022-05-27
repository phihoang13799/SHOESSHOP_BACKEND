using System;
using System.Collections.Generic;

#nullable disable

namespace APIBACKEND.Models
{
    public partial class Customer
    {


        public int CustomerId { get; set; }
        public string Fullname { get; set; }
        public DateTime? Birthday { get; set; }
        public string Avatar { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public DateTime? CreateDate { get; set; }
        public string Password { get; set; }
        public int? Active { get; set; }
        public int? RoleId { get; set; }
    }
}

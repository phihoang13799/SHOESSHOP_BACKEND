using System;
using System.Collections.Generic;

#nullable disable

namespace APIBACKEND.Models
{
    public partial class Transaction
    {
        public int TransactionStatusId { get; set; }
        public string Status { get; set; }
        public string Description { get; set; }

    }
}

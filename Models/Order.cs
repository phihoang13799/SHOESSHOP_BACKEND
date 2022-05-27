using System;
using System.Collections.Generic;

#nullable disable

namespace APIBACKEND.Models
{
    public partial class Order
    {
        public int OrderId { get; set; }
        public int? CustomerId { get; set; }
        public DateTime? OrderDate { get; set; }
        public DateTime? ShipDate { get; set; }
        public int? TransactionStatusId { get; set; }
        public int? Paid { get; set; }
        public DateTime? PaymentDate { get; set; }
        public string Note { get; set; }
        public int? TotalOrder { get; set; }
    }
}

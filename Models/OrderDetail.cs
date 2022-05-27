using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIBACKEND.Models
{
    public partial class OrderDetail
    {
        public int OrderDetailId { get; set; }
        public int? OrderId { get; set; }
        public int? ProductId { get; set; }
        public int? OrderNumber { get; set; }
        public int? Discount { get; set; }
        public int? TotalDetail { get; set; }
    }
}

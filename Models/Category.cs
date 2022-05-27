using System;
using System.Collections.Generic;

#nullable disable

namespace APIBACKEND.Models
{
    public partial class Category
    {

        public int CatId { get; set; }
        public string Catname { get; set; }
        public string Description { get; set; }
        public int? ParentId { get; set; }
        public int? Levels { get; set; }
        public int? Ordering { get; set; }
        public int Published { get; set; }
    }
}

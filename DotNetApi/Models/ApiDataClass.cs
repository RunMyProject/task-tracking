using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetApi.Models
{
    public class ApiDataClass
    {
        public int Id { get; set; }
        public string Task { get; set; }
        public string Color { get; set; }
        public int DayStart { get; set; }
        public int DayEnd { get; set; }
    }
}
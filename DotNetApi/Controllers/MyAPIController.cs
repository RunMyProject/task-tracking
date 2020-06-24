using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotNetApi.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DotNetApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyAPIController : ControllerBase
    {

        public static ApiDataClass[] MyInMemoryDB = new ApiDataClass[] { };

        // GET: api/MyAPI
        [HttpGet]
        public IEnumerable<ApiDataClass> Get()
        {
            return MyInMemoryDB;
            /*
            return new ApiDataClass[] {
                new ApiDataClass {
                    Id = 1,
                    Task = "Task 1",
                    Color = "#b03532",
                    DayStart = 1,
                    DayEnd = 2
                }
            };
            */
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/MyAPI/
        [HttpPut("")]
        public void Put([FromBody] ApiDataClass[] payload)
        {
            MyInMemoryDB = payload;
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
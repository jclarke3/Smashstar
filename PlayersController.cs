using Smash.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace Smash.Api.Controllers
{
    public class PlayersController : ApiController
    {
        DomainHelper dh = new DomainHelper();
        // GET: api/GetPlayers
        public HttpResponseMessage Get()
        {
            var players = dh.GetAllPlayers();
            var j = new JavaScriptSerializer();
            string str = j.Serialize(players);
            return Request.CreateResponse(HttpStatusCode.OK, str);
        }

        // GET: api/GetPlayers/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/GetPlayers
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetPlayers/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetPlayers/5
        public void Delete(int id)
        {
        }
    }
}

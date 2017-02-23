using Smash.API.Models;
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
    public class VideosController : ApiController
    {
        DomainHelper dh = new DomainHelper();

        // GET: api/Videos
        public HttpResponseMessage Get()
        {
            var vids = dh.GetAllVideos();
            List<VideoModel> ret = new List<VideoModel>();
            foreach (var item in vids)
            {
                ret.Add(Mapper.VideoDomainToApi(item));
            }
            var j = new JavaScriptSerializer();
            string str = j.Serialize(ret);
            return Request.CreateResponse(HttpStatusCode.OK, str);
        }

        // GET: api/Videos/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Videos
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Videos/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Videos/5
        public void Delete(int id)
        {
        }
    }
}

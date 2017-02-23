using Smash.API.Models;
using Smash.API;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;
using Smash.Domain;

namespace Smash.Api.Controllers
{
    public class SubmitController : ApiController
    {
        DomainHelper dh = new DomainHelper();
        // GET: api/Submit
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Submit/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Submit
        public HttpResponseMessage Post([FromBody]SubmitModel data)
        {
            var submit = Mapper.SubmitAPItoDomain(data);
            var ret = dh.Submit(submit);
            //var j = new JavaScriptSerializer();
            //string str = j.Serialize(ret);
            return Request.CreateResponse(HttpStatusCode.OK, ret);
            /*
            When your users submit the form where you integrated reCAPTCHA, you'll get as part of the payload a string with the name "g-recaptcha-response". In order to check whether Google has verified that user, send a POST request with these parameters:
URL: https://www.google.com/recaptcha/api/siteverify
            secret(required)   6LeZWiQTAAAAAJntykMv - PCeiBIk7NH8dvDARa5i
            response(required) The value of 'g-recaptcha-response'.*/
        }


    }
}

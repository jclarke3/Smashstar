using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Smash.API.Models
{
    public class SubmitModel
    {
        public string Title { get; set; }
        public string URL { get; set; }
        public string Source { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string Player1 { get; set; }
        public string Char1 { get; set; }
        public string Player2 { get; set; }
        public string Char2 { get; set; }

    }
}
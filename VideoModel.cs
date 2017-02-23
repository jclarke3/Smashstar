using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Smash.API.Models
{
    public class VideoModel
    {
        public int VideoId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string URL { get; set; }
        public int Player1Id { get; set; }
        public Nullable<int> Player2Id { get; set; }
        public string Char1 { get; set; }
        public string Char2 { get; set; }
        public string Source { get; set; }
        public string Category { get; set; }
        public int TournamentId { get; set; }
        public System.DateTime DateAdded { get; set; }
        public string SubmitName { get; set; }
        public string SubmitContact { get; set; }
    }
}
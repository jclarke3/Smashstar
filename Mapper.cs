using Smash.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Smash.API.Models
{
    public static class Mapper
    {
        public static SubmitDAO SubmitAPItoDomain(SubmitModel submit)
        {
            SubmitDAO dao = new SubmitDAO()
            {
                Category = submit.Category,
                Char1 = submit.Char1,
                Char2 = submit.Char2,
                Description = submit.Description,
                Player1 = submit.Player1,
                Player2 = submit.Player2,
                Source = submit.Source,
                Title = submit.Title,
                URL = submit.URL
            };
            return dao;
        }

        public static VideoModel VideoDomainToApi(VideoDAO video)
        {
            VideoModel ret = new VideoModel()
            {
                Category = video.Category,
                DateAdded = video.DateAdded,
                Char1 = video.Char1,
                Char2 = video.Char2,
                Description = video.Description,
                Player1Id = video.Player1Id,
                Player2Id = video.Player2Id,
                Source = video.Source,
                SubmitContact = video.SubmitContact,
                SubmitName = video.SubmitName,
                Title = video.Title,
                TournamentId = video.TournamentId,
                URL = video.URL,
                VideoId = video.VideoId
            };
            return ret;
        }
    }
}
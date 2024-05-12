using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace DevDiaryAPI.Models
{
    public class BlogPost
    {
        [BsonId]
        //[BsonRepresentation(BsonType.ObjectId)] //incompatible for _id field of mongodb
        [BsonRepresentation(BsonType.String)]
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
    }
}

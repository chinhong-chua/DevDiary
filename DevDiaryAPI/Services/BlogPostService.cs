using DevDiaryAPI.Models;
using MongoDB.Driver;

namespace DevDiaryAPI.Services
{
    public class BlogPostService
    {
        private readonly IMongoCollection<BlogPost> _blogPosts;
        public BlogPostService(IMongoDatabase database)
        {
            _blogPosts = database.GetCollection<BlogPost>("BlogPost");
        }

        public async Task<IEnumerable<BlogPost>> GetAsync() => await _blogPosts.Find(post=> true).ToListAsync();

        public async Task<BlogPost> GetAsync(Guid id) => await _blogPosts.Find(post=> post.Id == id).FirstOrDefaultAsync();

        public async Task<BlogPost> Create(BlogPost blogPost) 
        {
            await _blogPosts.InsertOneAsync(blogPost);
            return blogPost;
        }

        public async Task Update(Guid id, BlogPost blogPost) => await  _blogPosts.ReplaceOneAsync(post => post.Id == id, blogPost);

        public async Task DeleteById(Guid id) => await _blogPosts.DeleteOneAsync(post=> post.Id == id);

        public async Task DeleteByPost(BlogPost blogPost) => await _blogPosts.DeleteOneAsync(post => post.Id == blogPost.Id);
    }
}

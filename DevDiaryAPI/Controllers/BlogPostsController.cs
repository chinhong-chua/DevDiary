using DevDiaryAPI.Models;
using DevDiaryAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DevDiaryAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        //private static List<BlogPost> _blogPosts = new List<BlogPost>{
        //new BlogPost { Id = 1, Title = "First Post", Content = "This is the first post" }
        // };

        private readonly BlogPostService _blogPostService;

        public BlogPostsController(BlogPostService blogPostService)
        {
            _blogPostService = blogPostService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            IEnumerable<BlogPost> blogPosts = await _blogPostService.GetAsync();
            return Ok(blogPosts);
        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> Get(Guid id)
        {
            BlogPost blogPost = await _blogPostService.GetAsync(id);
            if (blogPost == null)
            {
                return NotFound();
            }
            return Ok(blogPost);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] BlogPost post)
        {
            var addedPost = await _blogPostService.Create(post);
            return CreatedAtAction(nameof(Get), new { id = addedPost.Id }, addedPost);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> Put(Guid id, [FromBody] BlogPost post)
        {
            var existingPost = await _blogPostService.GetAsync(id);
            if (existingPost == null)
            {
                return NotFound();
            }

            await _blogPostService.Update(id, post);
            return Ok(post);
        }

        [HttpDelete("{id:guid}")]

        public async Task<IActionResult> DeleteById(Guid id)
        {
            var existingPost = await _blogPostService.GetAsync(id);
            if (existingPost == null)
            {
                return NotFound();
            }

            await _blogPostService.DeleteById(id);
            return NoContent();
        }
        //[HttpDelete]

        //public async Task<IActionResult> DeleteByPost(BlogPost blogPost)
        //{
        //    var existingPost = await _blogPostService.GetAsync(blogPost.Id);
        //    if (existingPost == null)
        //    {
        //        return NotFound();
        //    }

        //    await _blogPostService.DeleteByPost(blogPost);
        //    return NoContent();
        //}
    }
}

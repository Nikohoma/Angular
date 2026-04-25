using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace CourseAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private static readonly List<Course> _courses = new List<Course>
        {
            new Course { Id = 1, Title = "Angular Fundamentals", Instructor = "Harsh", Duration = 20 },
            new Course { Id = 2, Title = "ASP.NET Core API", Instructor = "Nikhil", Duration = 152 }
        };

        [HttpGet]
        public IActionResult GetCourses()
        {
            return Ok(_courses);
        }

        [HttpPost]
        public IActionResult AddCourse([FromBody] Course course)
        {
            course.Id = _courses.Count > 0 ? _courses.Max(c => c.Id) + 1 : 1;
            _courses.Add(course);
            return CreatedAtAction(nameof(GetCourses), new { id = course.Id }, course);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCourse(int id)
        {
            var course = _courses.FirstOrDefault(c => c.Id == id);
            if (course == null) return NotFound();
            _courses.Remove(course);
            return NoContent();
        }
    }
}

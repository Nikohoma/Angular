using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularAPI.Model;
using PassportAPI.Data;

namespace PassportAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PassportsController : ControllerBase
    {
        private readonly PassportAPIContext _context;

        public PassportsController(PassportAPIContext context)
        {
            _context = context;
        }

        // GET: api/passports
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Passport>>> GetAll()
        {
            return await _context.Passport.ToListAsync();
        }

        // GET: api/passports/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Passport>> GetById(int id)
        {
            var passport = await _context.Passport.FindAsync(id);

            if (passport == null)
                return NotFound();

            return passport;
        }

        // POST: api/passports
        [HttpPost]
        public async Task<ActionResult<Passport>> Create(Passport passport)
        {
            _context.Passport.Add(passport);
             await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = passport.Id }, passport);
        }

        // PUT: api/passports/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Passport passport)
        {
            if (id != passport.Id)
                return BadRequest();

            _context.Entry(passport).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Passport.Any(e => e.Id == id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/passports/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var passport = await _context.Passport.FindAsync(id);

            if (passport == null)
                return NotFound();

            _context.Passport.Remove(passport);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
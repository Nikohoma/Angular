using Employees.DTO;
using Employees.Models;
using Employees.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Employees.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class EmployeeController : Controller
    {
        private readonly IEmployeeRepository _repo;
        public EmployeeController(IEmployeeRepository repo)
        {
            _repo = repo;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var emps = await _repo.GetAllEmployees();
            return Ok(emps);
        }

        [HttpPost]
        public async Task<IActionResult> CreateEmployee(CreateEmployeeDto e)
        {
            await _repo.CreateEmployeeAsync(e);
            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(int id, CreateEmployeeDto e)
        {
            await _repo.UpdateEmployeeAsync(id,e);
            return Ok(e);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            await _repo.DeleteEmployeeAsync(id);
            return NoContent();
        }
    }
}

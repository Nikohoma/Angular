using Employees.Models;
using Employees.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;
using Employees.DTO;

namespace Employees.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly EmployeeDbContext _context;

        public EmployeeRepository(EmployeeDbContext context) => _context = context;

        public async Task<bool> CreateEmployeeAsync(CreateEmployeeDto emp)
        {
            if (emp == null) { return false; }
            if(emp.Name?.Length > 30 || emp.Name?.Length == 0) { return false; }

            var empl = new Employee()
            {
                Name = emp.Name,
                PhoneNo = emp.PhoneNo,
                role = emp.role
            };
            await _context.AddAsync(empl);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteEmployeeAsync(int id)
        {
            var emp = await _context.employees.FindAsync(id);
            if(emp!=null)
            {
                _context.employees.Remove(emp);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<Employee> GetEmployeeAsync(int id)
        {
            var emp = await _context.employees.FindAsync(id);
            if (emp != null)
            {
                return emp;
            }
            return new Employee();
        }

        public async Task<bool> UpdateEmployeeAsync(int id, CreateEmployeeDto emp)
        {
            var employee = await _context.employees.FindAsync(id);
            if (employee != null)
            {
                employee.Name = emp.Name;employee.PhoneNo = emp.PhoneNo; employee.role = emp.role;
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<IEnumerable<Employee>> GetAllEmployees()
        {
            var emps = await _context.employees.ToListAsync();
            return emps;
        }

    }
}

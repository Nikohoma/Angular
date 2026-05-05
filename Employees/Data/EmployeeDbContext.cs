using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using Employees.Models;

namespace Employees.Data
{
    public class EmployeeDbContext:DbContext
    {
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options):base(options)
        {
            
        }

        public DbSet<Employee> employees { get; set; }
    }
}

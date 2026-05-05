using Employees.Models;
using Employees.DTO;

namespace Employees.Repository
{
    public interface IEmployeeRepository
    {
        Task<bool> CreateEmployeeAsync(CreateEmployeeDto emp);
        Task<Employee> GetEmployeeAsync(int id);
        Task<bool> UpdateEmployeeAsync(int id, CreateEmployeeDto emp);
        Task<bool> DeleteEmployeeAsync(int id);

        Task<IEnumerable<Employee>> GetAllEmployees();
    }
}

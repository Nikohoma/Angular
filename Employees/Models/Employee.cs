using System.ComponentModel.DataAnnotations;

namespace Employees.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        [Required,MaxLength(30)]
        public string? Name { get; set; }
        [Required,RegularExpression("^[0-9]{10}$",ErrorMessage ="Phone number should contain 10 digits")]
        public int PhoneNo { get; set; }
        public string? role { get; set;}

    }
}

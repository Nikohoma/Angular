using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularAPI.Model
{
    [Table("Passport")]
    public class Passport
    {
        [Key]
        public int Id { get; set; }
        [Required,StringLength(30)]
        public string? HolderName { get; set; }
        [Required, StringLength(10)]
        public string? PassportNumber { get; set; }
        [Required]
        public string? ExpiryDate { get; set; }  
        [Required, StringLength(6)]
        public string? PPOCode{ get; set; }
    }
}

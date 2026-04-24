using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AngularAPI.Model;

namespace PassportAPI.Data
{
    public class PassportAPIContext : DbContext
    {
        public PassportAPIContext (DbContextOptions<PassportAPIContext> options)
            : base(options)
        {
        }

        public DbSet<AngularAPI.Model.Passport> Passport { get; set; } = default!;
    }
}

using Microsoft.EntityFrameworkCore;
using serverNET.Models;

namespace serverNET.Data
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }

        public DbSet<Form> Forms { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;
using peliculasBackEnd.Entidades;

namespace peliculasBackEnd
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Genero> Generos { get; set; }
    }
}

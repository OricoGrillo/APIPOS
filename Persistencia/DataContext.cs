using Dominio;
using Microsoft.EntityFrameworkCore;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {
        
    }
    public DbSet<Producto> Productos
    {
        get;
        set;
    }
    public DbSet<Categoria> Categorias
    {
        get;
        set;
    }
}
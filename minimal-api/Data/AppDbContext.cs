using Microsoft.EntityFrameworkCore;
using minimal_api.Models;

namespace minimal_api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Administrador> Administradores => Set<Administrador>();
    public DbSet<Veiculo> Veiculos => Set<Veiculo>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Administrador>(entity =>
        {
            entity.HasIndex(a => a.Email).IsUnique();
            entity.Property(a => a.Email).IsRequired();
            entity.Property(a => a.Nome).IsRequired();
            entity.Property(a => a.SenhaHash).IsRequired();
            entity.Property(a => a.Perfil).IsRequired();
        });

        modelBuilder.Entity<Veiculo>(entity =>
        {
            entity.HasIndex(v => v.Placa).IsUnique();
            entity.Property(v => v.Marca).IsRequired();
            entity.Property(v => v.Modelo).IsRequired();
            entity.Property(v => v.Placa).IsRequired();
        });

        modelBuilder.Entity<Administrador>().HasData(new Administrador
        {
            Id = 1,
            Nome = "Administrador Padrão",
            Email = "admin@admin.com",
            SenhaHash = BCrypt.Net.BCrypt.HashPassword("admin123"),
            Perfil = "Adm"
        });

        base.OnModelCreating(modelBuilder);
    }
}

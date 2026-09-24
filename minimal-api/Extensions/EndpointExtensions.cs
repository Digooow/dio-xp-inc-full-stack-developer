using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using minimal_api.Data;
using minimal_api.Filters;
using minimal_api.Models;
using minimal_api.Services;

namespace minimal_api.Extensions;

public static class EndpointExtensions
{
    public static void AddCustomSwagger(this IServiceCollection services)
    {
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
    }

    public static void AddJwtAuthentication(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = configuration["Jwt:Issuer"] ?? "minimal-api",
                ValidAudience = configuration["Jwt:Audience"] ?? "minimal-api-users",
                IssuerSigningKey = new SymmetricSecurityKey(
                    System.Text.Encoding.UTF8.GetBytes(configuration["Jwt:Key"] ?? "super-secret-key-for-jwt-token-1234567890"))
            };
        });

        services.AddAuthorization(options =>
        {
            options.AddPolicy("AdmPolicy", policy => policy.RequireRole("Adm"));
            options.AddPolicy("EditorOrAdmPolicy", policy => policy.RequireRole("Editor", "Adm"));
        });
    }

    public static void MapVehicleEndpoints(this WebApplication app)
    {
        app.MapGet("/veiculos", [Authorize] async (AppDbContext db) =>
            Results.Ok(await db.Veiculos.OrderBy(v => v.Id).ToListAsync()))
            .WithName("GetVeiculos")
            .WithSummary("Lista todos os veículos")
            .WithDescription("Retorna a listagem completa de veículos. Requer autenticação e perfil Editor ou Adm.")
            .Produces<List<Veiculo>>(StatusCodes.Status200OK)
            .Produces(StatusCodes.Status401Unauthorized)
            .RequireAuthorization("EditorOrAdmPolicy");

        app.MapGet("/veiculos/{id:int}", [Authorize] async (int id, AppDbContext db) =>
        {
            var veiculo = await db.Veiculos.FindAsync(id);
            return veiculo is null ? Results.NotFound() : Results.Ok(veiculo);
        }).WithName("GetVeiculoById")
          .WithSummary("Consulta um veículo por id")
          .WithDescription("Retorna os detalhes de um veículo específico pelo identificador. Requer autenticação e perfil Editor ou Adm.")
          .Produces<Veiculo>(StatusCodes.Status200OK)
          .Produces(StatusCodes.Status404NotFound)
          .Produces(StatusCodes.Status401Unauthorized)
          .RequireAuthorization("EditorOrAdmPolicy");

        app.MapPost("/veiculos", [Authorize] async (Veiculo veiculo, AppDbContext db) =>
        {
            if (await db.Veiculos.AnyAsync(v => v.Placa == veiculo.Placa))
                return Results.Conflict(new { message = "Já existe um veículo com esta placa." });

            db.Veiculos.Add(veiculo);
            await db.SaveChangesAsync();
            return Results.Created($"/veiculos/{veiculo.Id}", veiculo);
        }).WithName("CreateVeiculo")
          .WithSummary("Cria um novo veículo")
          .WithDescription("Cadastra um veículo no sistema. Requer autenticação e perfil Adm.")
          .Produces<Veiculo>(StatusCodes.Status201Created)
          .Produces(StatusCodes.Status400BadRequest)
          .Produces(StatusCodes.Status401Unauthorized)
          .Produces(StatusCodes.Status403Forbidden)
          .Produces(StatusCodes.Status409Conflict)
          .AddEndpointFilter<ValidationFilter<Veiculo>>()
          .RequireAuthorization("AdmPolicy");

        app.MapPut("/veiculos/{id:int}", [Authorize] async (int id, Veiculo veiculo, AppDbContext db) =>
        {
            var veiculoExistente = await db.Veiculos.FindAsync(id);
            if (veiculoExistente is null)
                return Results.NotFound();

            if (veiculoExistente.Placa != veiculo.Placa && await db.Veiculos.AnyAsync(v => v.Placa == veiculo.Placa))
                return Results.Conflict(new { message = "Já existe um veículo com esta placa." });

            veiculoExistente.Marca = veiculo.Marca;
            veiculoExistente.Modelo = veiculo.Modelo;
            veiculoExistente.Placa = veiculo.Placa;
            veiculoExistente.Ano = veiculo.Ano;
            veiculoExistente.Cor = veiculo.Cor;
            veiculoExistente.Ativo = veiculo.Ativo;

            await db.SaveChangesAsync();
            return Results.Ok(veiculoExistente);
        }).WithName("UpdateVeiculo")
          .WithSummary("Atualiza um veículo existente")
          .WithDescription("Atualiza os dados de um veículo. Requer autenticação e perfil Adm.")
          .Produces<Veiculo>(StatusCodes.Status200OK)
          .Produces(StatusCodes.Status404NotFound)
          .Produces(StatusCodes.Status401Unauthorized)
          .Produces(StatusCodes.Status403Forbidden)
          .Produces(StatusCodes.Status409Conflict)
          .AddEndpointFilter<ValidationFilter<Veiculo>>()
          .RequireAuthorization("AdmPolicy");

        app.MapDelete("/veiculos/{id:int}", [Authorize] async (int id, AppDbContext db) =>
        {
            var veiculo = await db.Veiculos.FindAsync(id);
            if (veiculo is null)
                return Results.NotFound();

            db.Veiculos.Remove(veiculo);
            await db.SaveChangesAsync();
            return Results.NoContent();
        }).WithName("DeleteVeiculo")
          .WithSummary("Remove um veículo")
          .WithDescription("Exclui um veículo da base de dados. Requer autenticação e perfil Adm.")
          .Produces(StatusCodes.Status204NoContent)
          .Produces(StatusCodes.Status404NotFound)
          .Produces(StatusCodes.Status401Unauthorized)
          .Produces(StatusCodes.Status403Forbidden)
          .RequireAuthorization("AdmPolicy");
    }

    public static void MapAdminEndpoints(this WebApplication app)
    {
        app.MapPost("/admin/login", async (LoginRequest request, AppDbContext db, TokenService tokenService) =>
        {
            var usuario = await db.Administradores
                .FirstOrDefaultAsync(a => a.Email == request.Email);

            if (usuario is null || !BCrypt.Net.BCrypt.Verify(request.Senha, usuario.SenhaHash))
            {
                return Results.Unauthorized();
            }

            var token = tokenService.GenerateToken(usuario);
            return Results.Ok(new { token });
        }).WithName("LoginAdministrador")
          .WithSummary("Autentica um administrador e gera JWT")
          .WithDescription("Valida as credenciais do administrador e retorna um token JWT para uso nos endpoints protegidos. Exemplo: { email: 'admin@admin.com', senha: 'admin123' }")
          .Produces<Dictionary<string, string>>(StatusCodes.Status200OK)
          .Produces(StatusCodes.Status401Unauthorized)
          .AddEndpointFilter<ValidationFilter<LoginRequest>>();

        app.MapGet("/admin", [Authorize] async (AppDbContext db) =>
            Results.Ok(await db.Administradores.OrderBy(a => a.Id).ToListAsync()))
            .WithName("GetAdministradores")
            .WithSummary("Lista administradores")
            .WithDescription("Retorna a lista de administradores cadastrados. Requer autenticação e perfil Adm.")
            .Produces<List<Administrador>>(StatusCodes.Status200OK)
            .Produces(StatusCodes.Status401Unauthorized)
            .Produces(StatusCodes.Status403Forbidden)
            .RequireAuthorization("AdmPolicy");

        app.MapPost("/admin", [Authorize] async (Administrador administrador, AppDbContext db) =>
        {
            if (string.IsNullOrWhiteSpace(administrador.SenhaHash) || administrador.SenhaHash.Length < 6)
                return Results.BadRequest(new { message = "A senha deve ter pelo menos 6 caracteres." });

            if (await db.Administradores.AnyAsync(a => a.Email == administrador.Email))
                return Results.Conflict(new { message = "Já existe um administrador com este e-mail." });

            administrador.SenhaHash = BCrypt.Net.BCrypt.HashPassword(administrador.SenhaHash);
            db.Administradores.Add(administrador);
            await db.SaveChangesAsync();
            return Results.Created($"/admin/{administrador.Id}", administrador);
        }).WithName("CreateAdministrador")
          .WithSummary("Cria um novo administrador")
          .WithDescription("Cadastra um novo administrador no sistema. Requer autenticação e perfil Adm.")
          .Produces<Administrador>(StatusCodes.Status201Created)
          .Produces(StatusCodes.Status400BadRequest)
          .Produces(StatusCodes.Status401Unauthorized)
          .Produces(StatusCodes.Status403Forbidden)
          .Produces(StatusCodes.Status409Conflict)
          .AddEndpointFilter<ValidationFilter<Administrador>>()
          .RequireAuthorization("AdmPolicy");
    }

    public record LoginRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Senha { get; set; } = string.Empty;
    }
}

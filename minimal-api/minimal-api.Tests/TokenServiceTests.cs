using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.Extensions.Configuration;
using minimal_api.Models;
using minimal_api.Services;
using Xunit;

namespace minimal_api.Tests;

public class TokenServiceTests
{
    [Fact]
    public void GenerateToken_ShouldCreateTokenWithRoleClaim()
    {
        var configuration = new ConfigurationBuilder()
            .AddInMemoryCollection(new Dictionary<string, string?>
            {
                ["Jwt:Key"] = "super-secret-key-for-tests-1234567890",
                ["Jwt:Issuer"] = "minimal-api",
                ["Jwt:Audience"] = "minimal-api-users"
            })
            .Build();

        var service = new TokenService(configuration);
        var admin = new Administrador
        {
            Id = 1,
            Nome = "Administrador",
            Email = "admin@admin.com",
            Perfil = "Adm"
        };

        var token = service.GenerateToken(admin);

        Assert.False(string.IsNullOrWhiteSpace(token));

        var jwtToken = new JwtSecurityTokenHandler().ReadJwtToken(token);
        Assert.Contains(jwtToken.Claims, claim =>
            (claim.Type == "role" || claim.Type == ClaimTypes.Role || claim.Type.EndsWith("/role")) && claim.Value == "Adm");
    }
}

using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using minimal_api.Models;

namespace minimal_api.Services;

public class TokenService
{
    private readonly IConfiguration _configuration;

    public TokenService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public string GenerateToken(Administrador administrador)
    {
        var issuer = _configuration["Jwt:Issuer"] ?? "minimal-api";
        var audience = _configuration["Jwt:Audience"] ?? "minimal-api-users";
        var keyValue = _configuration["Jwt:Key"] ?? "super-secret-key-for-jwt-token-1234567890";

        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(keyValue));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, administrador.Email),
            new Claim(JwtRegisteredClaimNames.Email, administrador.Email),
            new Claim(ClaimTypes.Name, administrador.Nome),
            new Claim(ClaimTypes.NameIdentifier, administrador.Id.ToString()),
            new Claim(ClaimTypes.Role, administrador.Perfil)
        };

        var token = new JwtSecurityToken(
            issuer: issuer,
            audience: audience,
            claims: claims,
            expires: DateTime.UtcNow.AddHours(2),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}

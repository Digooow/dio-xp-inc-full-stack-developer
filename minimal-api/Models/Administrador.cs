using System.ComponentModel.DataAnnotations;

namespace minimal_api.Models;

public class Administrador
{
    public int Id { get; set; }

    [Required]
    [StringLength(100)]
    public string Nome { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    [StringLength(150)]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MinLength(6)]
    public string SenhaHash { get; set; } = string.Empty;

    [Required]
    [RegularExpression("^(Adm|Editor)$")]
    public string Perfil { get; set; } = "Editor";
}

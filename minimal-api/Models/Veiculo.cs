using System.ComponentModel.DataAnnotations;

namespace minimal_api.Models;

public class Veiculo
{
    public int Id { get; set; }

    [Required]
    [StringLength(100)]
    public string Marca { get; set; } = string.Empty;

    [Required]
    [StringLength(100)]
    public string Modelo { get; set; } = string.Empty;

    [Required]
    [StringLength(20)]
    public string Placa { get; set; } = string.Empty;

    [Range(1900, 2100)]
    public int Ano { get; set; }

    [StringLength(50)]
    public string Cor { get; set; } = string.Empty;

    public bool Ativo { get; set; } = true;
}

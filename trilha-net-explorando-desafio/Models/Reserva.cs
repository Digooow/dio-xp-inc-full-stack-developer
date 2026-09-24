using System;
using System.Collections.Generic;

namespace DesafioProjetoHospedagem.Models
{
    public class Reserva
    {
        public List<Pessoa> Hospedes { get; set; }
        public Suite Suite { get; set; }
        public int DiasReservados { get; set; }

        public Reserva() { }

        public Reserva(int diasReservados)
        {
            DiasReservados = diasReservados;
        }

        /// <summary>
        /// Cadastra os hóspedes, validando a capacidade da suite.
        /// </summary>
        public void CadastrarHospedes(List<Pessoa> hospedes)
        {
            // Verifica se a suite já foi cadastrada e se a capacidade é suficiente
            if (Suite != null && Suite.Capacidade >= hospedes.Count)
            {
                Hospedes = hospedes;
            }
            else
            {
                throw new Exception("A capacidade da suite é insuficiente para o número de hóspedes.");
            }
        }

        /// <summary>
        /// Cadastra a suite da reserva.
        /// </summary>
        public void CadastrarSuite(Suite suite)
        {
            Suite = suite;
        }

        /// <summary>
        /// Retorna a quantidade total de hóspedes.
        /// </summary>
        public int ObterQuantidadeHospedes()
        {
            // Retorna 0 se a lista for nula, senão o número de elementos
            return Hospedes?.Count ?? 0;
        }

        /// <summary>
        /// Calcula o valor total da diária, com desconto de 10% para reservas >= 10 dias.
        /// </summary>
        public decimal CalcularValorDiaria()
        {
            decimal valorBase = DiasReservados * Suite.ValorDiaria;

            // Aplica desconto se houver 10 ou mais dias
            if (DiasReservados >= 10)
                valorBase *= 0.9m; // 10% de desconto

            return valorBase;
        }
    }
}
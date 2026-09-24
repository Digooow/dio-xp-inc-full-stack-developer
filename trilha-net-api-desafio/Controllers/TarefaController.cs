using Microsoft.AspNetCore.Mvc;
using TrilhaApiDesafio.Context;
using TrilhaApiDesafio.Models;
using System;
using System.Linq;

namespace TrilhaApiDesafio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TarefaController : ControllerBase
    {
        private readonly OrganizadorContext _context;

        public TarefaController(OrganizadorContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult ObterPorId(int id)
        {
            // Busca a tarefa pelo ID
            var tarefa = _context.Tarefas.Find(id);
            
            // Se não encontrar, retorna NotFound (404)
            if (tarefa == null)
                return NotFound();
            
            // Caso contrário, retorna OK (200) com a tarefa
            return Ok(tarefa);
        }

        [HttpGet("ObterTodos")]
        public IActionResult ObterTodos()
        {
            // Busca todas as tarefas do banco
            var todasTarefas = _context.Tarefas.ToList();
            return Ok(todasTarefas);
        }

        [HttpGet("ObterPorTitulo")]
        public IActionResult ObterPorTitulo(string titulo)
        {
            // Busca tarefas cujo título contenha o texto informado (case-insensitive)
            var tarefas = _context.Tarefas
                .Where(t => t.Titulo.Contains(titulo))
                .ToList();
            return Ok(tarefas);
        }

        [HttpGet("ObterPorData")]
        public IActionResult ObterPorData(DateTime data)
        {
            // Busca tarefas com a mesma data (ignorando hora)
            var tarefas = _context.Tarefas
                .Where(x => x.Data.Date == data.Date)
                .ToList();
            return Ok(tarefas);
        }

        [HttpGet("ObterPorStatus")]
        public IActionResult ObterPorStatus(EnumStatusTarefa status)
        {
            // Busca tarefas com o status especificado (Pendente ou Finalizado)
            var tarefas = _context.Tarefas
                .Where(x => x.Status == status)
                .ToList();
            return Ok(tarefas);
        }

        [HttpPost]
        public IActionResult Criar(Tarefa tarefa)
        {
            // Valida se a data foi preenchida
            if (tarefa.Data == DateTime.MinValue)
                return BadRequest(new { Erro = "A data da tarefa não pode ser vazia" });

            // Adiciona a tarefa ao contexto
            _context.Tarefas.Add(tarefa);
            // Persiste no banco de dados
            _context.SaveChanges();

            // Retorna 201 Created com a rota para obter a tarefa criada
            return CreatedAtAction(nameof(ObterPorId), new { id = tarefa.Id }, tarefa);
        }

        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, Tarefa tarefa)
        {
            // Busca a tarefa existente no banco
            var tarefaBanco = _context.Tarefas.Find(id);

            // Se não existir, retorna NotFound
            if (tarefaBanco == null)
                return NotFound();

            // Valida a data
            if (tarefa.Data == DateTime.MinValue)
                return BadRequest(new { Erro = "A data da tarefa não pode ser vazia" });

            // Atualiza os campos da tarefaBanco com os valores recebidos
            tarefaBanco.Titulo = tarefa.Titulo;
            tarefaBanco.Descricao = tarefa.Descricao;
            tarefaBanco.Data = tarefa.Data;
            tarefaBanco.Status = tarefa.Status;

            // Marca a entidade como modificada (não é estritamente necessário, pois o EF já está trackeando)
            _context.Tarefas.Update(tarefaBanco);
            // Persiste as alterações
            _context.SaveChanges();

            // Retorna OK com a tarefa atualizada
            return Ok(tarefaBanco);
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            // Busca a tarefa no banco
            var tarefaBanco = _context.Tarefas.Find(id);

            // Se não existir, retorna NotFound
            if (tarefaBanco == null)
                return NotFound();

            // Remove a tarefa do contexto
            _context.Tarefas.Remove(tarefaBanco);
            // Persiste a exclusão
            _context.SaveChanges();

            // Retorna 204 No Content (sucesso sem corpo)
            return NoContent();
        }
    }
}
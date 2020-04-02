using System.Collections.Generic;
using System.Linq;
using Dominio;
using Persistencia.Interfaces;

namespace Persistencia
{
    public class SqlData : IData
    {
        private readonly DataContext _context;
        public SqlData(DataContext context)
        {
            _context = context;
        }

        public Categoria CreateCategoria(Categoria categoria)
        {
            _context.Categorias.Add(categoria);
            _context.SaveChanges();
            return categoria;
        }

        public bool DeleteCategoria(int id)
        {
            var Categoria = new Categoria { Id = id };
            _context.Categorias.Remove(Categoria);
            _context.SaveChanges();
            return true;
        }

        public Categoria GetCategoriaById(int id)
        {
            var Categoria = _context.Categorias.Find(id);
            return Categoria;
        }

        public IEnumerable<Categoria> GetCategoriasList()
        {
            var Categorias = _context.Categorias.ToList();
            return Categorias;
        }

        public Categoria UpdateCategoria(Categoria categoria)
        {
            _context.Categorias.Update(categoria);
            _context.SaveChanges();
            return categoria;
        }
    }
}
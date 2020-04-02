using System.Collections.Generic;
using Aplicacion.Interfaces;
using Dominio;
using Persistencia.Interfaces;

namespace Aplicacion
{
    public class CategoriaService : ICategoriaService
    {
        private readonly IData _data;
        public CategoriaService(IData data)
        {
            _data = data;
        }

        public Categoria Create(Categoria categoria)
        {
            return _data.CreateCategoria(categoria);
        }

        public bool Delete(int id)
        {
            return _data.DeleteCategoria(id);
        }

        public Categoria GetById(int id)
        {
            return _data.GetCategoriaById(id);
        }

        public IEnumerable<Categoria> List()
        {
            return _data.GetCategoriasList();
        }

        public Categoria Update(Categoria categoria)
        {
            return _data.UpdateCategoria(categoria);
        }
    }
}
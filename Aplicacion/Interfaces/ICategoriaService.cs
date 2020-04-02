using System.Collections.Generic;
using Dominio;

namespace Aplicacion.Interfaces
{
    public interface ICategoriaService
    {
         IEnumerable<Categoria> List();
         Categoria GetById(int id);
         bool Delete(int id);
         Categoria Create(Categoria categoria);
         Categoria Update(Categoria categoria);
    }
}
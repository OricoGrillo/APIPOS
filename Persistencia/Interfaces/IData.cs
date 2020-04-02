using System.Collections.Generic;
using Dominio;

namespace Persistencia.Interfaces
{
    public interface IData
    {
         #region Usuarios
         IEnumerable<Categoria> GetCategoriasList();
         Categoria GetCategoriaById(int id);
         Categoria CreateCategoria(Categoria usuario);
         Categoria UpdateCategoria(Categoria usuario);
         bool DeleteCategoria(int id);
         #endregion
    }
}
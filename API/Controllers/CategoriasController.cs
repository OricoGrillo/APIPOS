using System.Collections.Generic;
using System.Linq;
using Dominio;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CategoriasController : Controller
    {
        private readonly DataContext _data;

        public CategoriasController(DataContext data)
        {
            this._data = data;
        }

        [HttpGet]
        [Route("api/[controller]")]
        public ActionResult<IEnumerable<Categoria>> GetCategorias()
        {
            var Categorias = _data.Categorias.ToList();
            return Ok(Categorias);
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public ActionResult<Categoria> GetCategoria(int id)
        {
            var Categoria = _data.Categorias.ToList().Find(x => x.Id == id);
            
            if(Categoria != null)
            {
                return Ok(Categoria);
            }

            return NotFound();
        }

        [HttpPost]
        [Route("api/[controller]")]
        public ActionResult CrearCategoria([FromBody] Categoria Categoria)
        {
            _data.Categorias.Add(Categoria);
            _data.SaveChanges();
            return Ok();        
        }

        [HttpPut]
        [Route("api/[controller]/{id}")]
        public ActionResult UpdateCategoria([FromBody] Categoria Categoria, int id)
        {
            _data.Categorias.Update(Categoria);
            _data.SaveChanges();
            return Ok();        
        }

        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public ActionResult DeleteCategoria(int id)
        {
            var Categoria = new Categoria { Id = id };
            _data.Categorias.Remove(Categoria);
            _data.SaveChanges();
            return Ok();        
        }
    }
}
using System.Collections.Generic;
using System.Linq;
using Dominio;
using Microsoft.AspNetCore.Mvc;
using Aplicacion.Interfaces;

namespace API.Controllers
{
    public class CategoriasController : Controller
    {
        private readonly ICategoriaService _service;

        public CategoriasController(ICategoriaService service)
        {
            this._service = service;
        }

        [HttpGet]
        [Route("api/[controller]")]
        public ActionResult<IEnumerable<Categoria>> GetCategorias()
        {
            var Categorias = _service.List();
            return Ok(Categorias);
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public ActionResult<Categoria> GetCategoria(int id)
        {
            var Categoria = _service.GetById(id);
            
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
            Categoria = _service.Create(Categoria);
            return Ok(Categoria);        
        }

        [HttpPut]
        [Route("api/[controller]")]
        public ActionResult UpdateCategoria([FromBody] Categoria Categoria)
        {
            Categoria = _service.Update(Categoria);
            return Ok(Categoria);        
        }

        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public ActionResult DeleteCategoria(int id)
        {
            var Categoria = new Categoria { Id = id };
            _service.Delete(id);

            return Ok();        
        }
    }
}
using System.Collections.Generic;
using System.Linq;
using Dominio;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProductosController : Controller
    {
        
        private readonly DataContext _data;

        public ProductosController(DataContext data)
        {
            this._data = data;
        }

        [HttpGet]
        [Route("api/[controller]")]
        public ActionResult<IEnumerable<Producto>> GetProductos()
        {
            var Productos = _data.Productos.ToList();
            return Ok(Productos);
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public ActionResult<Producto> GetProducto(int id)
        {
            var Producto = _data.Productos.ToList().Find(x => x.Id == id);
            
            if(Producto != null)
            {
                return Ok(Producto);
            }

            return NotFound();
        }

        [HttpPost]
        [Route("api/[controller]")]
        public ActionResult CrearProducto([FromBody] Producto Producto)
        {
            _data.Productos.Add(Producto);
            _data.SaveChanges();
            return Ok();        
        }

        [HttpPut]
        [Route("api/[controller]/{id}")]
        public ActionResult UpdateProducto([FromBody] Producto Producto, int id)
        {
            _data.Productos.Update(Producto);
            _data.SaveChanges();
            return Ok();        
        }

        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public ActionResult DeleteProducto(int id)
        {
            var Producto = new Producto { Id = id };
            _data.Productos.Remove(Producto);
            _data.SaveChanges();
            return Ok();        
        }

    }
}
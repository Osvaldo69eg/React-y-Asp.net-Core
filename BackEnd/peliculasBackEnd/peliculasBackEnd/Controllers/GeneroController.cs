using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using peliculasBackEnd.Entidades;
using System.Threading.Tasks;

namespace peliculasBackEnd.Controllers
{
    [Route("api/generos")]
    [ApiController]
    public class GeneroController : ControllerBase
    {
        private readonly ILogger<GeneroController> logger;

        public GeneroController(ILogger<GeneroController> logger)
        {
            this.logger = logger;
        }

        [HttpGet]
        public ActionResult<List<Genero>> Get()
        {
            return new List<Genero>() { new Genero() { Id = 1, Nombre = "Comedia" } };
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<Genero>> Get(int Id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genero genero)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genero genero)
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            throw new NotImplementedException();
        }
    }
}

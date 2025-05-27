using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using peliculasBackEnd.DTOs;
using peliculasBackEnd.Entidades;
using System.Threading.Tasks;

namespace peliculasBackEnd.Controllers
{
    [Route("api/generos")]
    [ApiController]
    public class GeneroController : ControllerBase
    {
        private readonly ILogger<GeneroController> logger;
        private readonly ApplicationDbContext applicationDbContext;
        private readonly IMapper mapper;

        public GeneroController(ILogger<GeneroController> logger,ApplicationDbContext applicationDbContext,IMapper mapper)
        {
            this.logger = logger;
            this.applicationDbContext = applicationDbContext;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<GeneroDTO>>> Get()
        {
            var generos = await applicationDbContext.Generos.ToListAsync();
            return mapper.Map<List<GeneroDTO>>(generos);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<Genero>> Get(int Id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] GeneroCreacionDTO generoCreacionDTO)
        {
            var genero = mapper.Map<Genero>(generoCreacionDTO);
            applicationDbContext.Add(genero);
            await applicationDbContext.SaveChangesAsync();
            return NoContent();
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

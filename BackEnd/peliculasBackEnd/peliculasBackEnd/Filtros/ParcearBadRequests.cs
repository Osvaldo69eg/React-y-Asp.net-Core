using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.VisualBasic;

namespace peliculasBackEnd.Filtros
{
    public class ParcearBadRequests : IActionFilter

    {

        public void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                var errores = new List<string>();

                foreach (var estado in context.ModelState.Values)
                {
                    foreach (var error in estado.Errors)
                    {
                        errores.Add(error.ErrorMessage);
                    }
                }

                context.Result = new BadRequestObjectResult(errores);
            }
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            // No se necesita lógica aquí para parsear bad requests
        }
    }
}

﻿using Microsoft.AspNetCore.Mvc;

namespace peliculasBackEnd.ApiBehavior
{
    public class BehaviorBadRequests
    {
        public static void Parsear(ApiBehaviorOptions options)
        {
            options.InvalidModelStateResponseFactory = actionContext =>
            {
                var respuesta = new List<string>();

                foreach (var llave in actionContext.ModelState.Keys)
                {
                    foreach (var error in actionContext.ModelState[llave].Errors)
                    {
                        respuesta.Add(error.ErrorMessage);
                    }
                }

                return new BadRequestObjectResult(respuesta);
            };
        }
    }
}

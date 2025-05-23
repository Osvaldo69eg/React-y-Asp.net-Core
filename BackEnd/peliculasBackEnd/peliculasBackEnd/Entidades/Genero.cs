﻿using peliculasBackEnd.Validaciones;
using System.ComponentModel.DataAnnotations;

namespace peliculasBackEnd.Entidades
{
    public class Genero
    {
        public int Id { get; set; }
        [Required (ErrorMessage ="El campo {0} es requerido.")]
        [StringLength(maximumLength:50)]
        [PrimeraLetraMayuscula]
        public string Nombre { get; set; }

      
    }
}

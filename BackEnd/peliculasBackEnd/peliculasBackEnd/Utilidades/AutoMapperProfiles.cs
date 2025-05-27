using AutoMapper;
using peliculasBackEnd.DTOs;
using peliculasBackEnd.Entidades;

namespace peliculasBackEnd.Utilidades
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Genero, GeneroDTO>().ReverseMap();
            CreateMap<GeneroCreacionDTO, Genero>();

        }
    }
}

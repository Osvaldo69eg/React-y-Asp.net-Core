
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using peliculasBackEnd;
using peliculasBackEnd.ApiBehavior;
using peliculasBackEnd.Filtros;
using peliculasBackEnd.Utilidades;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//Filtros
builder.Services.AddScoped<ParcearBadRequests>();


builder.Services.AddControllers(options =>
{
    options.Filters.Add<ParcearBadRequests>();
}).ConfigureApiBehaviorOptions(BehaviorBadRequests.Parsear);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


//Configurar DbContext con SQL Server
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("defaultConnection")));

// Obtener la URL del frontend desde appsettings.json
var frontendUrl = builder.Configuration.GetValue<string>("frontend_url");

// onfigurar CORS correctamente
builder.Services.AddCors(options =>
{
    options.AddPolicy("PoliticaCors", policy =>
    {
        policy.WithOrigins(frontendUrl)
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Crear configuración manualmente
var mapperConfig = new MapperConfiguration(cfg =>
{
    cfg.AddProfile<AutoMapperProfiles>();
});

// Crear el IMapper y registrarlo en el contenedor
IMapper mapper = mapperConfig.CreateMapper();
builder.Services.AddSingleton(mapper);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
//Aplicar la política de CORS antes de Authorization
app.UseCors("PoliticaCors");

app.UseAuthorization();

app.MapControllers();

app.Run();

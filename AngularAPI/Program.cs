using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PassportAPI.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<PassportAPIContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("PassportAPIContext") ?? throw new InvalidOperationException("Connection string 'PassportAPIContext' not found.")));

builder.Services.AddSwaggerGen();
// Add services to the container.
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = null;
    });
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

//app.UseCors(op => op.WithOrigins("Https://localhost:25667").AllowAnyMethod().AllowAnyHeader());
app.UseCors(op => op
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

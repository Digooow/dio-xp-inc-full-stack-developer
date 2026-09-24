using Microsoft.EntityFrameworkCore;
using minimal_api.Data;
using minimal_api.Extensions;
using minimal_api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection") ?? "Data Source=minimal-api.db"));

builder.Services.AddCustomSwagger();
builder.Services.AddJwtAuthentication(builder.Configuration);
builder.Services.AddScoped<TokenService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthentication();
app.UseAuthorization();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
}

app.MapVehicleEndpoints();
app.MapAdminEndpoints();

app.MapGet("/", () => Results.Ok(new { message = "Minimal API em execução", status = "ok" }));

app.Run();

public partial class Program { }

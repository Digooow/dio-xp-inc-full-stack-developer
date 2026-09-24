using System.Net;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Mvc.Testing;

namespace minimal_api.Tests;

public class VehicleCrudIntegrationTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;

    public VehicleCrudIntegrationTests(WebApplicationFactory<Program> factory)
    {
        _factory = factory;
    }

    [Fact]
    public async Task FullVehicleCrudFlow_WithJwt_ShouldSucceed()
    {
        var client = _factory.CreateClient();

        var loginResponse = await client.PostAsJsonAsync("/admin/login", new
        {
            email = "admin@admin.com",
            senha = "admin123"
        });

        var loginBody = await loginResponse.Content.ReadFromJsonAsync<Dictionary<string, string>>();
        Assert.Equal(HttpStatusCode.OK, loginResponse.StatusCode);
        Assert.NotNull(loginBody);
        Assert.True(loginBody!.ContainsKey("token"));

        var token = loginBody["token"];
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);

        var createPayload = new
        {
            marca = "Toyota",
            modelo = "Corolla",
            placa = "ABC-1234",
            ano = 2024,
            cor = "Prata",
            ativo = true
        };

        var createResponse = await client.PostAsJsonAsync("/veiculos", createPayload);
        var createdVehicle = await createResponse.Content.ReadFromJsonAsync<Dictionary<string, object>>();

        Assert.Equal(HttpStatusCode.Created, createResponse.StatusCode);
        Assert.NotNull(createdVehicle);
        Assert.Equal("Toyota", createdVehicle!["marca"]?.ToString());

        var vehicleId = createdVehicle["id"]?.ToString();
        Assert.False(string.IsNullOrWhiteSpace(vehicleId));

        var listResponse = await client.GetAsync("/veiculos");
        Assert.Equal(HttpStatusCode.OK, listResponse.StatusCode);

        var updatePayload = new
        {
            marca = "Honda",
            modelo = "Civic",
            placa = "ABC-1234",
            ano = 2025,
            cor = "Azul",
            ativo = true
        };

        var updateResponse = await client.PutAsJsonAsync($"/veiculos/{vehicleId}", updatePayload);
        Assert.Equal(HttpStatusCode.OK, updateResponse.StatusCode);

        var getByIdResponse = await client.GetAsync($"/veiculos/{vehicleId}");
        Assert.Equal(HttpStatusCode.OK, getByIdResponse.StatusCode);

        var deleteResponse = await client.DeleteAsync($"/veiculos/{vehicleId}");
        Assert.Equal(HttpStatusCode.NoContent, deleteResponse.StatusCode);
    }
}

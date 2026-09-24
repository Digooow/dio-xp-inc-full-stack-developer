using System.Net;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using minimal_api.Data;

namespace minimal_api.Tests;

public class IntegrationTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;

    public IntegrationTests(WebApplicationFactory<Program> factory)
    {
        _factory = factory;
    }

    [Fact]
    public async Task RootEndpoint_ShouldReturnOk()
    {
        var client = _factory.CreateClient();

        var response = await client.GetAsync("/");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    [Fact]
    public async Task LoginEndpoint_ShouldReturnTokenForValidUser()
    {
        var client = _factory.CreateClient();

        var payload = new { email = "admin@admin.com", senha = "admin123" };
        var response = await client.PostAsJsonAsync("/admin/login", payload);

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);

        var body = await response.Content.ReadFromJsonAsync<Dictionary<string, string>>();
        Assert.NotNull(body);
        Assert.True(body.ContainsKey("token"));
        Assert.False(string.IsNullOrWhiteSpace(body["token"]));
    }

    [Fact]
    public async Task GetVeiculosWithoutToken_ShouldReturnUnauthorized()
    {
        var client = _factory.CreateClient();

        var response = await client.GetAsync("/veiculos");

        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
    }
}

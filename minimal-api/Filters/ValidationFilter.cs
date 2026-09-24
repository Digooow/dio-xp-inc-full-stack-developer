using System.ComponentModel.DataAnnotations;

namespace minimal_api.Filters;

public class ValidationFilter<T> : IEndpointFilter where T : class
{
    public async ValueTask<object?> InvokeAsync(EndpointFilterInvocationContext context, EndpointFilterDelegate next)
    {
        var model = context.Arguments.OfType<T>().FirstOrDefault();

        if (model is null)
        {
            return await next(context);
        }

        var validationContext = new ValidationContext(model);
        var validationResults = new List<ValidationResult>();

        if (!Validator.TryValidateObject(model, validationContext, validationResults, validateAllProperties: true))
        {
            var errors = validationResults
                .SelectMany(r => r.MemberNames.Any() ? r.MemberNames.Select(m => new { m, r.ErrorMessage }) : new[] { new { m = string.Empty, r.ErrorMessage } })
                .GroupBy(x => x.m)
                .ToDictionary(g => g.Key, g => g.Select(x => x.ErrorMessage ?? "Invalid value").ToArray());

            return Results.ValidationProblem(errors);
        }

        return await next(context);
    }
}

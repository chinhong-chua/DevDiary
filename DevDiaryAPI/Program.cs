using DevDiaryAPI.Services;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddSingleton<IMongoClient, MongoClient>(serviceProvider =>
           new MongoClient(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddScoped<IMongoDatabase>(
    serviceProvider => serviceProvider.GetRequiredService<IMongoClient>().GetDatabase(builder.Configuration["MongoDbSettings:DatabaseName"]));

builder.Services.AddScoped<BlogPostService>();

var myOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(opt =>
{
    opt.AddPolicy(myOrigins, policy =>
    {
        policy.WithOrigins("http://localhost:5173", "https://localhost:5173").AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(myOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

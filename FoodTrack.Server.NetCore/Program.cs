using System;
using FoodTrack.Server.NetCore.Application.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using FoodTrack.Server.NetCore.Persistance;
using FoodTrack.Server.NetCore.Application.Food;

namespace FoodTrack.Server.NetCore
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("NetCore Server Started");
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseStartup<Program>()
                .Build();
            host.Run();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            const string connectionString = "mongodb://localhost:27017";
            IMongoClient mongoClient = new MongoClient(connectionString);
            IMongoDatabase database = mongoClient.GetDatabase("FoodTrackDb");
            services.AddSingleton<IMongoClient>(mongoClient);
            services.AddSingleton<IMongoDatabase>(database);
            
            services.AddTransient<IRepository<Domain.Food>,FoodRepository>();
            services.AddTransient<IRepository<Domain.FoodTrack>,FoodTrackRepository>();
            services.AddTransient<IFoodAppService, FoodAppService>();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            app.UseMvcWithDefaultRoute();
        }
    }
}

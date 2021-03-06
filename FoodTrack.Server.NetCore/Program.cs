﻿using System;
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
            // Add service and create Policy with options
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials() );
            });

            //const string connectionString = "mongodb://localhost:27017";
            const string mongoDbAtlasConnStr = "mongodb://sosergio:penbird12$@ft-cluster-shard-00-00-uh1mk.mongodb.net:27017,ft-cluster-shard-00-01-uh1mk.mongodb.net:27017,ft-cluster-shard-00-02-uh1mk.mongodb.net:27017/FoodTrackDb?ssl=true&replicaSet=ft-cluster-shard-0&authSource=admin";
            IMongoClient mongoClient = new MongoClient(mongoDbAtlasConnStr);
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
            // global policy - assign here or on each controller
            app.UseCors("CorsPolicy");
            app.UseMvcWithDefaultRoute();
        }
    }
}

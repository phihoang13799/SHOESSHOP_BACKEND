using APIBACKEND.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIBACKEND
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  builder =>
                                  {
                                      builder.WithOrigins("http://localhost:3000")
                                                              .AllowAnyHeader()
                                                        .AllowAnyMethod()
                                                           .AllowCredentials();
                                      builder.WithOrigins("http://localhost:3001")
                                                              .AllowAnyHeader()
                                                        .AllowAnyMethod()
                                                           .AllowCredentials();
                                      builder.WithOrigins("http://localhost:3002")
                                                              .AllowAnyHeader()
                                                        .AllowAnyMethod()
                                                           .AllowCredentials();
                                      builder.WithOrigins("http://localhost:3003")
                                                              .AllowAnyHeader()
                                                        .AllowAnyMethod()
                                                           .AllowCredentials();
                                      builder.WithMethods("PUT","POST", "DELETE", "GET");
                                  });
            });

            var stringConnectdb = Configuration.GetConnectionString("dbEcom");
            services.AddDbContext<ECOMContext>(options => options.UseSqlServer(stringConnectdb));

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "APIBACKEND", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "APIBACKEND v1"));
            }
            app.UseCors(MyAllowSpecificOrigins);
            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

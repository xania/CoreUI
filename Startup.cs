using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xania.CoreUI.Data;
using Xania.CoreUI.Logging;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Xania.CoreUI.Drive;

namespace Xania.CoreUI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection")));
            services.AddDefaultIdentity<IdentityUser>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

            services.AddMvc()
                .AddRazorPagesOptions(options =>
                {
                    /**
                     * Map all page requests to a index page
                     */
                    options.Conventions.AddPageRoute("/index", "{*clientRoute:regex(^[^\\.]*$)}");
                })
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                ;

            services.AddSignalR();


            services.AddSingleton<IDocumentStore>(new MemoryDocumentStore());
            services.AddScoped<IFileRepository, FileRepository>();
            services.AddScoped<IObjectStore<FileMetadata>, DocumentObjectStore<FileMetadata>>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IHubContext<LoggerHub> logContext)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles(new StaticFileOptions
            {
                // accept request to *.tsx static files
                ServeUnknownFileTypes = true,
                DefaultContentType = "text/plain"
            });
            app.UseCookiePolicy();

            app.UseAuthentication();

            app.UseSignalR(routes =>
            {
                routes.MapHub<LoggerHub>("/loggerHub");
            });
            app.UseMvc();
        }
    }
}

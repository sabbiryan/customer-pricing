using System;
using System.Collections.Generic;
using System.Linq;
using CustomerPricing.Server.Migrations.Seed;
using CustomerPricing.Server.Models;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(CustomerPricing.Server.Startup))]

namespace CustomerPricing.Server
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);

            SecurityBuilder.Run(ApplicationDbContext.Create());
        }
    }
}

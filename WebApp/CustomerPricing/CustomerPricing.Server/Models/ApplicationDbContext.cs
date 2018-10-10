using System;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using CustomerPricing.Server.Models.BusinessModels;
using Microsoft.AspNet.Identity.EntityFramework;

namespace CustomerPricing.Server.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }
        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }



        public virtual DbSet<Party> Parties { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<PartyPricing> PartyPricings { get; set; }
    }
}
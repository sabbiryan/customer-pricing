using System;
using System.Linq;
using System.Web;
using CustomerPricing.Server.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace CustomerPricing.Server.Migrations.Seed
{
    public class SecurityBuilder
    {
              

        public static void Run(ApplicationDbContext context)
        {
            AddRoles(context);
            AddUsers(context);
        }



        private static void AddUsers(ApplicationDbContext context)
        {
            if (context.Users.Any(x => x.UserName == StaticUser.Admin) == false)
            {
                var adminRole = context.Roles.FirstOrDefault(x => x.Name == StaticRole.Admin);

                var userId = Guid.NewGuid().ToString();
                context.Users.Add(new ApplicationUser()
                {
                    Id = userId,
                    UserName = StaticUser.Admin,
                    FullName = "Admin",
                    Email = "admin@default.com",
                    PhoneNumber = "01911xxxxxx",
                    PasswordHash = new PasswordHasher().HashPassword("123qwe"),
                    Roles =
                    {
                        new IdentityUserRole()
                        {
                            UserId = userId,
                            RoleId = adminRole?.Id
                        }
                    },
                    SecurityStamp = Guid.NewGuid().ToString(),
                    EmailConfirmed = true,                    
                });


                context.SaveChanges();
            }
        }



        private static void AddRoles(ApplicationDbContext context)
        {           
            var roles = StaticRole.GetAll();

            foreach (var role in roles)
            {
                if (context.Roles.Any(x => x.Name == role) == false)
                {
                    context.Roles.Add(new IdentityRole()
                    {
                        Id = Guid.NewGuid().ToString(),
                        Name = role
                    });
                }
            }

            context.SaveChanges();
        }
    }
}
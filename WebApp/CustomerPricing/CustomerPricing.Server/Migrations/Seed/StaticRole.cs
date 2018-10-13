using System.Collections.Generic;

namespace CustomerPricing.Server.Migrations.Seed
{
    public class StaticRole
    {
        public static string Admin = "Admin";
        public static string User = "User";


        public static List<string> GetAll()
        {
            return new List<string>()
            {
                Admin,
                User
            };
        }
    }
}
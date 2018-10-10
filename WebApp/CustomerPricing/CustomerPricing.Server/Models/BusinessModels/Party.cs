using System.Collections.Generic;

namespace CustomerPricing.Server.Models.BusinessModels
{
    public class Party :EntityBase
    {
        public string Name { get; set; }

        public string Address { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string Facebook { get; set; }
        public string Imo { get; set; }
        public string Whatsapp { get; set; }

        public string ShopOwnerName { get; set; }
        public string ShopOwnerPhone { get; set; }

        public string ContactPersonName { get; set; }
        public string ContactPersonPhone { get; set; }

        public virtual ICollection<PartyPricing> PartyPricings { get; set; }
    }
}
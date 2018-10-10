using System.Collections.Generic;

namespace CustomerPricing.Server.Models.BusinessModels
{
    public class Product : EntityBase
    {
        public string Code { get; set; }

        public string Name { get; set; }
        
        public string Description { get; set; }

        public string ProductionCost { get; set; }

        public double SalePrice { get; set; }


        public virtual ICollection<PartyPricing> PartyPricings { get; set; }
    }
}
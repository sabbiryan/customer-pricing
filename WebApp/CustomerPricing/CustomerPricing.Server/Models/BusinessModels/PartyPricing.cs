using System.ComponentModel.DataAnnotations.Schema;

namespace CustomerPricing.Server.Models.BusinessModels
{
    public class PartyPricing : EntityBase
    {
        
        public string PartyId { get; set; }
        [ForeignKey("PartyId")]
        public virtual Party Party { get; set; }
        
        public string ProductId { get; set; }
        [ForeignKey("ProductId")]
        public virtual Product Product { get; set; }

        public double ProductSalePrice { get; set; }

    }
}
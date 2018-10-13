using CustomerPricing.Server.Models.BusinessModels;

namespace CustomerPricing.Server.Models.ViewModels
{
    public class PartyPricingViewModel : ViewModelBase
    {
        public PartyPricingViewModel(PartyPricing model)
        {
            if(model == null) return;
            
            Id = model.Id;
            PartyId = model.PartyId;
            ProductId = model.ProductId;
            ProductSalePrice = model.ProductSalePrice;


            if (model.Party != null)
            {
                Party = new PartyViewModel(model.Party);
            }
            if (model.Product != null)
            {
                Product = new ProductViewModel(model.Product);
            }
        }

        public string PartyId { get; set; }        
        public  PartyViewModel Party { get; set; }

        public string ProductId { get; set; }        
        public ProductViewModel Product { get; set; }


        public double ProductSalePrice { get; set; }

    }
}
using System.Collections.Generic;
using CustomerPricing.Server.Models.BusinessModels;

namespace CustomerPricing.Server.Models.ViewModels
{
    public class ProductViewModel : ViewModelBase
    {
        public ProductViewModel()
        {
            
        }

        public ProductViewModel(Product model)
        {
            Id = model.Id;
            Code = model.Code;
            Name = model.Name;
            Description = model.Description;
            ProductionCost = model.ProductionCost;
            SalePrice = model.SalePrice;
        }

        public string Code { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string ProductionCost { get; set; }

        public double SalePrice { get; set; }
    }
}
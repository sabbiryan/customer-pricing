using CustomerPricing.Server.Models.BusinessModels;

namespace CustomerPricing.Server.Models.ViewModels
{
    public class PartyViewModel : ViewModelBase
    {

        public PartyViewModel()
        {
            
        }

        public PartyViewModel(Party model)
        {
            Id = model.Id;
            Name = model.Name;
            Address = model.Address;
            Phone = model.Phone;
            Email = model.Email;
            Facebook = model.Facebook;
            Imo = model.Imo;
            Whatsapp = model.Whatsapp;
            ShopOwnerName = model.ShopOwnerName;
            ShopOwnerPhone = model.ShopOwnerPhone;

            ContactPersonName = model.ContactPersonName;
            ContactPersonPhone = model.ContactPersonPhone;
        }

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
    }
}
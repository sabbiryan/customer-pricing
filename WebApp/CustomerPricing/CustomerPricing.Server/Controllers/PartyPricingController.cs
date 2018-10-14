using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using CustomerPricing.Server.Models.BusinessModels;
using CustomerPricing.Server.Models.ViewModels;

namespace CustomerPricing.Server.Controllers
{

    [RoutePrefix("api/PartyPricing")]
    public class PartyPricingController : ControllerBase
    {
        
        public PartyPricingController()
        {
            
        }


        public IHttpActionResult Get()
        {
            var distinctPartyPricings = DbContext.PartyPricings.Where(x => x.IsDeleted == false)
                .Include(x => x.Party)
                .GroupBy(x => x.PartyId).ToList();

            List<PartyPricingViewModel> viewModels =
                distinctPartyPricings.Select(x =>
                    new PartyPricingViewModel(x.FirstOrDefault(y => y.IsDeleted == false),
                        x.Count(y => y.IsDeleted == false))).ToList();


            return Ok(viewModels);
        }


        public IHttpActionResult Get(string id)
        {
            var party = DbContext.Parties.Find(id);
            var viewModel = new PartyViewModel(party);


            return Ok(viewModel);
        }


        public IHttpActionResult Post(Party model)
        {

            model.Id = Guid.NewGuid().ToString();
            model.CreationTime = DateTime.Now;

            var isExist = DbContext.Parties.AsNoTracking().Any(x => x.IsDeleted == false && x.Name.ToLower() == model.Name.ToLower() && x.Id != model.Id);
            if (isExist) return BadRequest($"{model.Name} already exist. Please try with diffrent one");

            isExist = DbContext.Parties.AsNoTracking().Any(x => x.IsDeleted == false && x.Phone.ToLower() == model.Phone.ToLower() && x.Id != model.Id);
            if (isExist) return BadRequest($"{model.Phone} already exist. Please try with diffrent one");

            var party = DbContext.Parties.Add(model);
            DbContext.SaveChanges();

            return Ok(party);
        }


        public IHttpActionResult Put(Party model)
        {
            model.ModificationTime = DateTime.Now;

            var isExist = DbContext.Parties.AsNoTracking().Any(x => x.IsDeleted == false && x.Name.ToLower() == model.Name.ToLower() && x.Id != model.Id);
            if (isExist) return BadRequest($"{model.Name} already exist. Please try with diffrent one");

            isExist = DbContext.Parties.AsNoTracking().Any(x => x.IsDeleted == false && x.Phone.ToLower() == model.Phone.ToLower() && x.Id != model.Id);
            if (isExist) return BadRequest($"{model.Phone} already exist. Please try with diffrent one");

            DbContext.Entry(model).State = EntityState.Modified;
            DbContext.SaveChanges();

            return Ok(model.Id);
        }



        public IHttpActionResult Delete(string id)
        {
            var party = DbContext.Parties.Find(id);

            if (party == null) return BadRequest("Entry not found!");

            DbContext.Parties.Remove(party);
            var saveChanges = DbContext.SaveChanges() > 0;

            return Ok(saveChanges);
        }
    }
}
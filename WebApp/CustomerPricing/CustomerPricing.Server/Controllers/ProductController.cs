using System;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using CustomerPricing.Server.Models.BusinessModels;
using CustomerPricing.Server.Models.ViewModels;

namespace CustomerPricing.Server.Controllers
{

    [RoutePrefix("api/Product")]
    public class ProductController : ControllerBase
    {
        
        public ProductController()
        {
            
        }


        public IHttpActionResult Get()
        {
            var products = DbContext.Products.Where(x => x.IsDeleted == false).ToList();
            var viewModels = products.ConvertAll(x => new ProductViewModel(x));

            return Ok(viewModels);
        }


        public IHttpActionResult Get(string id)
        {
            var product = DbContext.Products.FirstOrDefault(x => x.Id == id);
            var viewModel = new ProductViewModel(product);


            return Ok(viewModel);
        }


        public IHttpActionResult Post(Product model)
        {

            model.Id = Guid.NewGuid().ToString();
            model.CreationTime = DateTime.Now;

            var isExist = DbContext.Products.AsNoTracking().Any(x => x.IsDeleted == false && x.Name.ToLower() == model.Name.ToLower() && x.Id != model.Id);
            if (isExist) return BadRequest($"{model.Name} already exist. Please try with diffrent one");

            var product = DbContext.Products.Add(model);
            DbContext.SaveChanges();

            return Ok(product);
        }


        public IHttpActionResult Put(Product model)
        {
            model.ModificationTime = DateTime.Now;

            var isExist = DbContext.Products.AsNoTracking().Any(x => x.IsDeleted == false && x.Name.ToLower() == model.Name.ToLower() && x.Id != model.Id);
            if (isExist) return BadRequest($"{model.Name} already exist. Please try with diffrent one");


            DbContext.Entry(model).State = EntityState.Modified;
            DbContext.SaveChanges();

            return Ok(model.Id);
        }



        public IHttpActionResult Delete(string id)
        {
            var product = DbContext.Products.Find(id);

            if (product == null) return BadRequest("Entry not found!");

            DbContext.Products.Remove(product);
            var saveChanges = DbContext.SaveChanges() > 0;

            return Ok(saveChanges);
        }
    }
}
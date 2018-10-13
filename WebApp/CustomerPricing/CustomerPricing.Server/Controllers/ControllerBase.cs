using System.Web.Http;
using CustomerPricing.Server.Models;

namespace CustomerPricing.Server.Controllers
{
    public abstract class ControllerBase : ApiController
    {
        protected readonly ApplicationDbContext DbContext;

        protected ControllerBase()
        {
            DbContext = ApplicationDbContext.Create();
        }
    }
}
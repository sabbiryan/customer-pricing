
using System;
using System.ComponentModel.DataAnnotations;

namespace CustomerPricing.Server.Models.BusinessModels
{
    public class EntityBase
    {
        [Key]
        public string Id { get; set; }

        public DateTime? CreationTime { get; set; }
        public DateTime? ModificationTime { get; set; }
        public DateTime? DeletionTime { get; set; }

        public string CreatedBy { get; set; }
        public string ModiifedBy { get; set; }
        public string DeletedBy { get; set; }

        public bool IsDeleted { get; set; }

        public string IpAddress { get; set; }
        public string DeviceInfo { get; set; }
    }
}
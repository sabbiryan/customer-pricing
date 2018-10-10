namespace CustomerPricing.Server.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BusinessModels_InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Party",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(),
                        Address = c.String(),
                        Phone = c.String(),
                        Email = c.String(),
                        Facebook = c.String(),
                        Imo = c.String(),
                        Whatsapp = c.String(),
                        ShopOwnerName = c.String(),
                        ShopOwnerPhone = c.String(),
                        ContactPersonName = c.String(),
                        ContactPersonPhone = c.String(),
                        CreationTime = c.DateTime(),
                        ModificationTime = c.DateTime(),
                        DeletionTime = c.DateTime(),
                        CreatedBy = c.String(),
                        ModiifedBy = c.String(),
                        DeletedBy = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                        IpAddress = c.String(),
                        DeviceInfo = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.PartyPricing",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        PartyId = c.String(maxLength: 128),
                        ProductId = c.String(maxLength: 128),
                        ProductSalePrice = c.Double(nullable: false),
                        CreationTime = c.DateTime(),
                        ModificationTime = c.DateTime(),
                        DeletionTime = c.DateTime(),
                        CreatedBy = c.String(),
                        ModiifedBy = c.String(),
                        DeletedBy = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                        IpAddress = c.String(),
                        DeviceInfo = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Party", t => t.PartyId)
                .ForeignKey("dbo.Product", t => t.ProductId)
                .Index(t => t.PartyId)
                .Index(t => t.ProductId);
            
            CreateTable(
                "dbo.Product",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Code = c.String(),
                        Name = c.String(),
                        Description = c.String(),
                        ProductionCost = c.String(),
                        SalePrice = c.Double(nullable: false),
                        CreationTime = c.DateTime(),
                        ModificationTime = c.DateTime(),
                        DeletionTime = c.DateTime(),
                        CreatedBy = c.String(),
                        ModiifedBy = c.String(),
                        DeletedBy = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                        IpAddress = c.String(),
                        DeviceInfo = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.PartyPricing", "ProductId", "dbo.Product");
            DropForeignKey("dbo.PartyPricing", "PartyId", "dbo.Party");
            DropIndex("dbo.PartyPricing", new[] { "ProductId" });
            DropIndex("dbo.PartyPricing", new[] { "PartyId" });
            DropTable("dbo.Product");
            DropTable("dbo.PartyPricing");
            DropTable("dbo.Party");
        }
    }
}

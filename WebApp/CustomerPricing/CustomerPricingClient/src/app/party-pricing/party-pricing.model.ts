import {Party } from "../party/party.model";
import { Product } from "../product/product.model";

export class PartyPricing {
  Id: string;
  PartyId: string;
  Party: Party;
  ProductId: string;
  Product:Product;
}

import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { ManagerListRelationFilter } from "../manager/ManagerListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";
import { StoreListRelationFilter } from "../store/StoreListRelationFilter";
import { SupplierListRelationFilter } from "../supplier/SupplierListRelationFilter";

export type AdminWhereInput = {
  customer?: CustomerListRelationFilter;
  email?: StringFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  item?: ItemListRelationFilter;
  lastName?: StringFilter;
  location?: StringFilter;
  manager?: ManagerListRelationFilter;
  phoneNumber?: IntFilter;
  sales?: SaleListRelationFilter;
  stores?: StoreListRelationFilter;
  supplier?: SupplierListRelationFilter;
};

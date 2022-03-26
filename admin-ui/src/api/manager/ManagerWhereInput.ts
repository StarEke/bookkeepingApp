import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { SupplierListRelationFilter } from "../supplier/SupplierListRelationFilter";

export type ManagerWhereInput = {
  admins?: AdminWhereUniqueInput;
  customers?: CustomerListRelationFilter;
  firstName?: StringFilter;
  gender?: StringFilter;
  id?: StringFilter;
  items?: ItemListRelationFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: IntNullableFilter;
  sales?: SaleListRelationFilter;
  stores?: StoreWhereUniqueInput;
  suppliers?: SupplierListRelationFilter;
};

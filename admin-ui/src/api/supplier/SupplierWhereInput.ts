import { AdminListRelationFilter } from "../admin/AdminListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { ManagerListRelationFilter } from "../manager/ManagerListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type SupplierWhereInput = {
  admins?: AdminListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  items?: ItemListRelationFilter;
  lastName?: StringFilter;
  location?: StringFilter;
  manager?: ManagerListRelationFilter;
  phoneNumber?: IntFilter;
  userName?: StringFilter;
};

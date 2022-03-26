import { AdminListRelationFilter } from "../admin/AdminListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ManagerWhereUniqueInput } from "../manager/ManagerWhereUniqueInput";

export type CustomerWhereInput = {
  admins?: AdminListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringFilter;
  gender?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  location?: StringNullableFilter;
  manager?: ManagerWhereUniqueInput;
  phoneNumber?: StringFilter;
  userName?: StringFilter;
};

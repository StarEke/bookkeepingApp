import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ManagerWhereUniqueInput } from "../manager/ManagerWhereUniqueInput";

export type StoreWhereInput = {
  admin?: AdminWhereUniqueInput;
  id?: StringFilter;
  location?: StringNullableFilter;
  manager?: ManagerWhereUniqueInput;
  storeName?: StringFilter;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringFilter;
  gender?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  nickName?: StringNullableFilter;
  phoneNumber?: StringFilter;
  storeId?: StringFilter;
};

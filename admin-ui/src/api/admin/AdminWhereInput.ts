import { StringFilter } from "../../util/StringFilter";

export type AdminWhereInput = {
  email?: StringFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  location?: StringFilter;
  phoneNumber?: StringFilter;
  subscriptionId?: StringFilter;
};

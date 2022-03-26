import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  username?: StringFilter;
};

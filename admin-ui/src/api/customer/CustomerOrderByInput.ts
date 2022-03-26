import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  location?: SortOrder;
  managerId?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
  userName?: SortOrder;
};

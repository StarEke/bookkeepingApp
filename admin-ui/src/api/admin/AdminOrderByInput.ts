import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  location?: SortOrder;
  phoneNumber?: SortOrder;
  subscriptionId?: SortOrder;
  updatedAt?: SortOrder;
};

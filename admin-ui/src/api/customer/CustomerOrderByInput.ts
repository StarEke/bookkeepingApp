import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  nickName?: SortOrder;
  phoneNumber?: SortOrder;
  storeId?: SortOrder;
  updatedAt?: SortOrder;
};

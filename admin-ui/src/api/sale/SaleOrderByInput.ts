import { SortOrder } from "../../util/SortOrder";

export type SaleOrderByInput = {
  adminId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  itemQuantity?: SortOrder;
  managerId?: SortOrder;
  sellingPrice?: SortOrder;
  updatedAt?: SortOrder;
};

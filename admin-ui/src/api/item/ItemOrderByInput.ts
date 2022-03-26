import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  adminsId?: SortOrder;
  costPrice?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  itemName?: SortOrder;
  itemQuantity?: SortOrder;
  managerId?: SortOrder;
  salesId?: SortOrder;
  sellingPrice?: SortOrder;
  supplierId?: SortOrder;
  updatedAt?: SortOrder;
};

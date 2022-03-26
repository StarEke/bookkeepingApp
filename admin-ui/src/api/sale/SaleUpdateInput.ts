import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { ItemUpdateManyWithoutSalesInput } from "./ItemUpdateManyWithoutSalesInput";
import { ManagerWhereUniqueInput } from "../manager/ManagerWhereUniqueInput";

export type SaleUpdateInput = {
  admin?: AdminWhereUniqueInput | null;
  item?: ItemUpdateManyWithoutSalesInput;
  itemQuantity?: number;
  manager?: ManagerWhereUniqueInput | null;
  sellingPrice?: number;
};

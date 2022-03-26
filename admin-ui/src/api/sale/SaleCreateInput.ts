import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { ItemCreateNestedManyWithoutSalesInput } from "./ItemCreateNestedManyWithoutSalesInput";
import { ManagerWhereUniqueInput } from "../manager/ManagerWhereUniqueInput";

export type SaleCreateInput = {
  admin?: AdminWhereUniqueInput | null;
  item?: ItemCreateNestedManyWithoutSalesInput;
  itemQuantity: number;
  manager?: ManagerWhereUniqueInput | null;
  sellingPrice: number;
};

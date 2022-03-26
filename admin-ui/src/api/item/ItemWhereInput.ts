import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ManagerWhereUniqueInput } from "../manager/ManagerWhereUniqueInput";
import { SaleWhereUniqueInput } from "../sale/SaleWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ItemWhereInput = {
  admins?: AdminWhereUniqueInput;
  costPrice?: FloatFilter;
  id?: StringFilter;
  itemName?: StringFilter;
  itemQuantity?: IntNullableFilter;
  manager?: ManagerWhereUniqueInput;
  sales?: SaleWhereUniqueInput;
  sellingPrice?: FloatNullableFilter;
  supplier?: SupplierWhereUniqueInput;
};

import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { ManagerWhereUniqueInput } from "../manager/ManagerWhereUniqueInput";
import { SaleWhereUniqueInput } from "../sale/SaleWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ItemCreateInput = {
  admins: AdminWhereUniqueInput;
  costPrice: number;
  itemName: string;
  itemQuantity?: number | null;
  manager: ManagerWhereUniqueInput;
  sales: SaleWhereUniqueInput;
  sellingPrice?: number | null;
  supplier: SupplierWhereUniqueInput;
};

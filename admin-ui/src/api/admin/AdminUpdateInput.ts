import { CustomerUpdateManyWithoutAdminsInput } from "./CustomerUpdateManyWithoutAdminsInput";
import { ItemUpdateManyWithoutAdminsInput } from "./ItemUpdateManyWithoutAdminsInput";
import { ManagerUpdateManyWithoutAdminsInput } from "./ManagerUpdateManyWithoutAdminsInput";
import { SaleUpdateManyWithoutAdminsInput } from "./SaleUpdateManyWithoutAdminsInput";
import { StoreUpdateManyWithoutAdminsInput } from "./StoreUpdateManyWithoutAdminsInput";
import { SupplierUpdateManyWithoutAdminsInput } from "./SupplierUpdateManyWithoutAdminsInput";

export type AdminUpdateInput = {
  customer?: CustomerUpdateManyWithoutAdminsInput;
  email?: string;
  firstName?: string;
  item?: ItemUpdateManyWithoutAdminsInput;
  lastName?: string;
  location?: string;
  manager?: ManagerUpdateManyWithoutAdminsInput;
  phoneNumber?: number;
  sales?: SaleUpdateManyWithoutAdminsInput;
  stores?: StoreUpdateManyWithoutAdminsInput;
  supplier?: SupplierUpdateManyWithoutAdminsInput;
};

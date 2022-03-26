import { AdminUpdateManyWithoutSuppliersInput } from "./AdminUpdateManyWithoutSuppliersInput";
import { ItemUpdateManyWithoutSuppliersInput } from "./ItemUpdateManyWithoutSuppliersInput";
import { ManagerUpdateManyWithoutSuppliersInput } from "./ManagerUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  admins?: AdminUpdateManyWithoutSuppliersInput;
  email?: string | null;
  firstName?: string;
  items?: ItemUpdateManyWithoutSuppliersInput;
  lastName?: string;
  location?: string;
  manager?: ManagerUpdateManyWithoutSuppliersInput;
  phoneNumber?: number;
  userName?: string;
};

import { AdminCreateNestedManyWithoutSuppliersInput } from "./AdminCreateNestedManyWithoutSuppliersInput";
import { ItemCreateNestedManyWithoutSuppliersInput } from "./ItemCreateNestedManyWithoutSuppliersInput";
import { ManagerCreateNestedManyWithoutSuppliersInput } from "./ManagerCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  admins?: AdminCreateNestedManyWithoutSuppliersInput;
  email?: string | null;
  firstName: string;
  items?: ItemCreateNestedManyWithoutSuppliersInput;
  lastName: string;
  location: string;
  manager?: ManagerCreateNestedManyWithoutSuppliersInput;
  phoneNumber: number;
  userName: string;
};

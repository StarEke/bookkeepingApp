import { CustomerCreateNestedManyWithoutAdminsInput } from "./CustomerCreateNestedManyWithoutAdminsInput";
import { ItemCreateNestedManyWithoutAdminsInput } from "./ItemCreateNestedManyWithoutAdminsInput";
import { ManagerCreateNestedManyWithoutAdminsInput } from "./ManagerCreateNestedManyWithoutAdminsInput";
import { SaleCreateNestedManyWithoutAdminsInput } from "./SaleCreateNestedManyWithoutAdminsInput";
import { StoreCreateNestedManyWithoutAdminsInput } from "./StoreCreateNestedManyWithoutAdminsInput";
import { SupplierCreateNestedManyWithoutAdminsInput } from "./SupplierCreateNestedManyWithoutAdminsInput";

export type AdminCreateInput = {
  customer?: CustomerCreateNestedManyWithoutAdminsInput;
  email: string;
  firstName: string;
  item?: ItemCreateNestedManyWithoutAdminsInput;
  lastName: string;
  location: string;
  manager?: ManagerCreateNestedManyWithoutAdminsInput;
  phoneNumber: number;
  sales?: SaleCreateNestedManyWithoutAdminsInput;
  stores?: StoreCreateNestedManyWithoutAdminsInput;
  supplier?: SupplierCreateNestedManyWithoutAdminsInput;
};

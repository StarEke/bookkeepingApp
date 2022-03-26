import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { CustomerCreateNestedManyWithoutManagersInput } from "./CustomerCreateNestedManyWithoutManagersInput";
import { ItemCreateNestedManyWithoutManagersInput } from "./ItemCreateNestedManyWithoutManagersInput";
import { SaleCreateNestedManyWithoutManagersInput } from "./SaleCreateNestedManyWithoutManagersInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { SupplierCreateNestedManyWithoutManagersInput } from "./SupplierCreateNestedManyWithoutManagersInput";

export type ManagerCreateInput = {
  admins?: AdminWhereUniqueInput | null;
  customers?: CustomerCreateNestedManyWithoutManagersInput;
  firstName: string;
  gender: string;
  items?: ItemCreateNestedManyWithoutManagersInput;
  lastName?: string | null;
  phoneNumber?: number | null;
  sales?: SaleCreateNestedManyWithoutManagersInput;
  stores?: StoreWhereUniqueInput | null;
  suppliers?: SupplierCreateNestedManyWithoutManagersInput;
};

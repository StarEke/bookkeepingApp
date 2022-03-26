import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { CustomerUpdateManyWithoutManagersInput } from "./CustomerUpdateManyWithoutManagersInput";
import { ItemUpdateManyWithoutManagersInput } from "./ItemUpdateManyWithoutManagersInput";
import { SaleUpdateManyWithoutManagersInput } from "./SaleUpdateManyWithoutManagersInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { SupplierUpdateManyWithoutManagersInput } from "./SupplierUpdateManyWithoutManagersInput";

export type ManagerUpdateInput = {
  admins?: AdminWhereUniqueInput | null;
  customers?: CustomerUpdateManyWithoutManagersInput;
  firstName?: string;
  gender?: string;
  items?: ItemUpdateManyWithoutManagersInput;
  lastName?: string | null;
  phoneNumber?: number | null;
  sales?: SaleUpdateManyWithoutManagersInput;
  stores?: StoreWhereUniqueInput | null;
  suppliers?: SupplierUpdateManyWithoutManagersInput;
};

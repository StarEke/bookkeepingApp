import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { ManagerWhereUniqueInput } from "../manager/ManagerWhereUniqueInput";

export type StoreCreateInput = {
  admin?: AdminWhereUniqueInput | null;
  location?: string | null;
  manager: ManagerWhereUniqueInput;
  storeName: string;
};

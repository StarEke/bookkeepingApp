import { AdminUpdateManyWithoutCustomersInput } from "./AdminUpdateManyWithoutCustomersInput";
import { ManagerWhereUniqueInput } from "../manager/ManagerWhereUniqueInput";

export type CustomerUpdateInput = {
  admins?: AdminUpdateManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string;
  gender?: string;
  lastName?: string;
  location?: string | null;
  manager?: ManagerWhereUniqueInput | null;
  phoneNumber?: string;
  userName?: string;
};

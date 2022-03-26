import { AdminCreateNestedManyWithoutCustomersInput } from "./AdminCreateNestedManyWithoutCustomersInput";
import { ManagerWhereUniqueInput } from "../manager/ManagerWhereUniqueInput";

export type CustomerCreateInput = {
  admins?: AdminCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  firstName: string;
  gender: string;
  lastName: string;
  location?: string | null;
  manager?: ManagerWhereUniqueInput | null;
  phoneNumber: string;
  userName: string;
};

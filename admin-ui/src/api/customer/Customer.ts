import { Admin } from "../admin/Admin";
import { Manager } from "../manager/Manager";

export type Customer = {
  admins?: Array<Admin>;
  createdAt: Date;
  email: string | null;
  firstName: string;
  gender: string;
  id: string;
  lastName: string;
  location: string | null;
  manager?: Manager | null;
  phoneNumber: string;
  updatedAt: Date;
  userName: string;
};

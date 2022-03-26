import { Admin } from "../admin/Admin";
import { Item } from "../item/Item";
import { Manager } from "../manager/Manager";

export type Supplier = {
  admins?: Array<Admin>;
  createdAt: Date;
  email: string | null;
  firstName: string;
  id: string;
  items?: Array<Item>;
  lastName: string;
  location: string;
  manager?: Array<Manager>;
  phoneNumber: number;
  updatedAt: Date;
  userName: string;
};

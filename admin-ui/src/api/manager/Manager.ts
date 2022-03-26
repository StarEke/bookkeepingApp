import { Admin } from "../admin/Admin";
import { Customer } from "../customer/Customer";
import { Item } from "../item/Item";
import { Sale } from "../sale/Sale";
import { Store } from "../store/Store";
import { Supplier } from "../supplier/Supplier";

export type Manager = {
  admins?: Admin | null;
  createdAt: Date;
  customers?: Array<Customer>;
  firstName: string;
  gender: string;
  id: string;
  items?: Array<Item>;
  lastName: string | null;
  phoneNumber: number | null;
  sales?: Array<Sale>;
  stores?: Store | null;
  suppliers?: Array<Supplier>;
  updatedAt: Date;
};

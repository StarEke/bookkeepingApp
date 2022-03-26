import { Customer } from "../customer/Customer";
import { Item } from "../item/Item";
import { Manager } from "../manager/Manager";
import { Sale } from "../sale/Sale";
import { Store } from "../store/Store";
import { Supplier } from "../supplier/Supplier";

export type Admin = {
  createdAt: Date;
  customer?: Array<Customer>;
  email: string;
  firstName: string;
  id: string;
  item?: Array<Item>;
  lastName: string;
  location: string;
  manager?: Array<Manager>;
  phoneNumber: number;
  sales?: Array<Sale>;
  stores?: Array<Store>;
  supplier?: Array<Supplier>;
  updatedAt: Date;
};

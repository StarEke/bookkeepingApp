import { Admin } from "../admin/Admin";
import { Manager } from "../manager/Manager";
import { Sale } from "../sale/Sale";
import { Supplier } from "../supplier/Supplier";

export type Item = {
  admins?: Admin;
  costPrice: number;
  createdAt: Date;
  id: string;
  itemName: string;
  itemQuantity: number | null;
  manager?: Manager;
  sales?: Sale;
  sellingPrice: number | null;
  supplier?: Supplier;
  updatedAt: Date;
};

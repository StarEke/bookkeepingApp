import { Admin } from "../admin/Admin";
import { Item } from "../item/Item";
import { Manager } from "../manager/Manager";

export type Sale = {
  admin?: Admin | null;
  createdAt: Date;
  id: string;
  item?: Array<Item>;
  itemQuantity: number;
  manager?: Manager | null;
  sellingPrice: number;
  updatedAt: Date;
};

import { Admin } from "../admin/Admin";
import { Manager } from "../manager/Manager";

export type Store = {
  admin?: Admin | null;
  createdAt: Date;
  id: string;
  location: string | null;
  manager?: Manager;
  storeName: string;
  updatedAt: Date;
};

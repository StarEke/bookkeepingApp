import { Supplier as TSupplier } from "../api/supplier/Supplier";

export const SUPPLIER_TITLE_FIELD = "firstName";

export const SupplierTitle = (record: TSupplier): string => {
  return record.firstName || record.id;
};

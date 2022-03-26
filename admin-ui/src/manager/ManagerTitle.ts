import { Manager as TManager } from "../api/manager/Manager";

export const MANAGER_TITLE_FIELD = "firstName";

export const ManagerTitle = (record: TManager): string => {
  return record.firstName || record.id;
};

import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";
import { MANAGER_TITLE_FIELD } from "../manager/ManagerTitle";

export const StoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"stores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="admin" source="admin.id" reference="Admin">
          <TextField source={ADMIN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="location " source="location" />
        <ReferenceField label="manager" source="manager.id" reference="Manager">
          <TextField source={MANAGER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="storeName" source="storeName" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

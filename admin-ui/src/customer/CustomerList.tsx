import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MANAGER_TITLE_FIELD } from "../manager/ManagerTitle";

export const CustomerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"customers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="location" source="location" />
        <ReferenceField label="manager" source="manager.id" reference="Manager">
          <TextField source={MANAGER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="phoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userName" source="userName" />
      </Datagrid>
    </List>
  );
};

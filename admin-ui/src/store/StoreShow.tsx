import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";
import { MANAGER_TITLE_FIELD } from "../manager/ManagerTitle";

export const StoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

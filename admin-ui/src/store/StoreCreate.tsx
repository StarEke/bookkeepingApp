import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AdminTitle } from "../admin/AdminTitle";
import { ManagerTitle } from "../manager/ManagerTitle";

export const StoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="admin.id" reference="Admin" label="admin">
          <SelectInput optionText={AdminTitle} />
        </ReferenceInput>
        <TextInput label="location " source="location" />
        <ReferenceInput source="manager.id" reference="Manager" label="manager">
          <SelectInput optionText={ManagerTitle} />
        </ReferenceInput>
        <TextInput label="storeName" source="storeName" />
      </SimpleForm>
    </Create>
  );
};

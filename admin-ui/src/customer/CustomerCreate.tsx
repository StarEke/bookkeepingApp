import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AdminTitle } from "../admin/AdminTitle";
import { ManagerTitle } from "../manager/ManagerTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="admin"
          reference="Admin"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdminTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="gender" source="gender" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="location" source="location" />
        <ReferenceInput source="manager.id" reference="Manager" label="manager">
          <SelectInput optionText={ManagerTitle} />
        </ReferenceInput>
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="userName" source="userName" />
      </SimpleForm>
    </Create>
  );
};

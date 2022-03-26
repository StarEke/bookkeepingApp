import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AdminTitle } from "../admin/AdminTitle";
import { ItemTitle } from "../item/ItemTitle";
import { ManagerTitle } from "../manager/ManagerTitle";

export const SupplierCreate = (props: CreateProps): React.ReactElement => {
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
        <ReferenceArrayInput
          source="item"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="lastName" source="lastName" />
        <TextInput label="location" source="location" />
        <ReferenceArrayInput
          source="manager"
          reference="Manager"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ManagerTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="phoneNumber" source="phoneNumber" />
        <TextInput label="userName" source="userName" />
      </SimpleForm>
    </Create>
  );
};

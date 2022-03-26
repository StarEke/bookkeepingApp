import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AdminCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="location" source="location" />
        <TextInput label="Phone number" source="phoneNumber" />
        <TextInput label="subscriptionId" source="subscriptionId" />
      </SimpleForm>
    </Create>
  );
};

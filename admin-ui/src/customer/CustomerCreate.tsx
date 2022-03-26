import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="gender" source="gender" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="nickName" source="nickName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="storeId" source="storeId" />
      </SimpleForm>
    </Create>
  );
};

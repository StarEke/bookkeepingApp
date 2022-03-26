import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="gender" source="gender" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="nickName" source="nickName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="storeId" source="storeId" />
      </SimpleForm>
    </Edit>
  );
};

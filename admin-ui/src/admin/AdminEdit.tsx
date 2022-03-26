import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AdminEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="location" source="location" />
        <TextInput label="Phone number" source="phoneNumber" />
        <TextInput label="subscriptionId" source="subscriptionId" />
      </SimpleForm>
    </Edit>
  );
};

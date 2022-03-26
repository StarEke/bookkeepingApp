import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { AdminTitle } from "../admin/AdminTitle";
import { ItemTitle } from "../item/ItemTitle";
import { ManagerTitle } from "../manager/ManagerTitle";

export const SaleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="admin.id" reference="Admin" label="admin">
          <SelectInput optionText={AdminTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="item"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="itemQuantity" source="itemQuantity" />
        <ReferenceInput source="manager.id" reference="Manager" label="manager">
          <SelectInput optionText={ManagerTitle} />
        </ReferenceInput>
        <NumberInput label="sellingPrice" source="sellingPrice" />
      </SimpleForm>
    </Edit>
  );
};

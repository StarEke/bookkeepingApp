import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AdminTitle } from "../admin/AdminTitle";
import { ManagerTitle } from "../manager/ManagerTitle";
import { SaleTitle } from "../sale/SaleTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="admin.id" reference="Admin" label="admins">
          <SelectInput optionText={AdminTitle} />
        </ReferenceInput>
        <NumberInput label="costPrice" source="costPrice" />
        <TextInput label="itemName" source="itemName" />
        <NumberInput step={1} label="itemQuantity" source="itemQuantity" />
        <ReferenceInput source="manager.id" reference="Manager" label="manager">
          <SelectInput optionText={ManagerTitle} />
        </ReferenceInput>
        <ReferenceInput source="sale.id" reference="Sale" label="sales">
          <SelectInput optionText={SaleTitle} />
        </ReferenceInput>
        <NumberInput label="sellingPrice" source="sellingPrice" />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

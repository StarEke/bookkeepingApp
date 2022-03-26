import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AdminTitle } from "../admin/AdminTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { ItemTitle } from "../item/ItemTitle";
import { SaleTitle } from "../sale/SaleTitle";
import { StoreTitle } from "../store/StoreTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const ManagerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="admin.id" reference="Admin" label="admins">
          <SelectInput optionText={AdminTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="customer"
          reference="Customer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerTitle} />
        </ReferenceArrayInput>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="Gender" source="gender" />
        <ReferenceArrayInput
          source="item"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="lastName" source="lastName" />
        <NumberInput step={1} label="phoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="sale"
          reference="Sale"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="store.id" reference="Store" label="stores">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="supplier"
          reference="Supplier"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SupplierTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

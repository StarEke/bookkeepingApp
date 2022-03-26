import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MANAGER_TITLE_FIELD } from "./ManagerTitle";
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const ManagerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="admins" source="admin.id" reference="Admin">
          <TextField source={ADMIN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="firstName" source="firstName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <ReferenceField label="stores" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Customer"
          target="ManagerId"
          label="customers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="firstName" source="firstName" />
            <TextField label="gender" source="gender" />
            <TextField label="ID" source="id" />
            <TextField label="lastName" source="lastName" />
            <TextField label="location" source="location" />
            <ReferenceField
              label="manager"
              source="manager.id"
              reference="Manager"
            >
              <TextField source={MANAGER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="phoneNumber" source="phoneNumber" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="userName" source="userName" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Item" target="ManagerId" label="Items">
          <Datagrid rowClick="show">
            <ReferenceField label="admins" source="admin.id" reference="Admin">
              <TextField source={ADMIN_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="costPrice" source="costPrice" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="itemName" source="itemName" />
            <TextField label="itemQuantity" source="itemQuantity" />
            <ReferenceField
              label="manager"
              source="manager.id"
              reference="Manager"
            >
              <TextField source={MANAGER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="sales" source="sale.id" reference="Sale">
              <TextField source={SALE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="sellingPrice" source="sellingPrice" />
            <ReferenceField
              label="supplier"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Sale" target="ManagerId" label="sales">
          <Datagrid rowClick="show">
            <ReferenceField label="admin" source="admin.id" reference="Admin">
              <TextField source={ADMIN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="itemQuantity" source="itemQuantity" />
            <ReferenceField
              label="manager"
              source="manager.id"
              reference="Manager"
            >
              <TextField source={MANAGER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="sellingPrice" source="sellingPrice" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

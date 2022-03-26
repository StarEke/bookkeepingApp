import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";
import { MANAGER_TITLE_FIELD } from "../manager/ManagerTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const ItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="admins" source="admin.id" reference="Admin">
          <TextField source={ADMIN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="costPrice" source="costPrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="itemName" source="itemName" />
        <TextField label="itemQuantity" source="itemQuantity" />
        <ReferenceField label="manager" source="manager.id" reference="Manager">
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
      </SimpleShowLayout>
    </Show>
  );
};

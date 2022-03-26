import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { ManagerWhereUniqueInput } from "../manager/ManagerWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";

export type SaleWhereInput = {
  admin?: AdminWhereUniqueInput;
  id?: StringFilter;
  item?: ItemListRelationFilter;
  itemQuantity?: IntFilter;
  manager?: ManagerWhereUniqueInput;
  sellingPrice?: FloatFilter;
};

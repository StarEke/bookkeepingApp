/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CustomerListRelationFilter } from "../../customer/base/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../../item/base/ItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SaleListRelationFilter } from "../../sale/base/SaleListRelationFilter";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";
import { SupplierListRelationFilter } from "../../supplier/base/SupplierListRelationFilter";
@InputType()
class ManagerWhereInput {
  @ApiProperty({
    required: false,
    type: () => AdminWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdminWhereUniqueInput)
  @IsOptional()
  @Field(() => AdminWhereUniqueInput, {
    nullable: true,
  })
  admins?: AdminWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CustomerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CustomerListRelationFilter)
  @IsOptional()
  @Field(() => CustomerListRelationFilter, {
    nullable: true,
  })
  customers?: CustomerListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  firstName?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  gender?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ItemListRelationFilter)
  @IsOptional()
  @Field(() => ItemListRelationFilter, {
    nullable: true,
  })
  items?: ItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  phoneNumber?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SaleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SaleListRelationFilter)
  @IsOptional()
  @Field(() => SaleListRelationFilter, {
    nullable: true,
  })
  sales?: SaleListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => StoreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StoreWhereUniqueInput)
  @IsOptional()
  @Field(() => StoreWhereUniqueInput, {
    nullable: true,
  })
  stores?: StoreWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SupplierListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SupplierListRelationFilter)
  @IsOptional()
  @Field(() => SupplierListRelationFilter, {
    nullable: true,
  })
  suppliers?: SupplierListRelationFilter;
}
export { ManagerWhereInput };

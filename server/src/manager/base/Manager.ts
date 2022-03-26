/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Admin } from "../../admin/base/Admin";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { Customer } from "../../customer/base/Customer";
import { Item } from "../../item/base/Item";
import { Sale } from "../../sale/base/Sale";
import { Store } from "../../store/base/Store";
import { Supplier } from "../../supplier/base/Supplier";
@ObjectType()
class Manager {
  @ApiProperty({
    required: false,
    type: () => Admin,
  })
  @ValidateNested()
  @Type(() => Admin)
  @IsOptional()
  admins?: Admin | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Customer],
  })
  @ValidateNested()
  @Type(() => Customer)
  @IsOptional()
  customers?: Array<Customer>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  gender!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Item],
  })
  @ValidateNested()
  @Type(() => Item)
  @IsOptional()
  items?: Array<Item>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  phoneNumber!: number | null;

  @ApiProperty({
    required: false,
    type: () => [Sale],
  })
  @ValidateNested()
  @Type(() => Sale)
  @IsOptional()
  sales?: Array<Sale>;

  @ApiProperty({
    required: false,
    type: () => Store,
  })
  @ValidateNested()
  @Type(() => Store)
  @IsOptional()
  stores?: Store | null;

  @ApiProperty({
    required: false,
    type: () => [Supplier],
  })
  @ValidateNested()
  @Type(() => Supplier)
  @IsOptional()
  suppliers?: Array<Supplier>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Manager };
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
import { AdminCreateNestedManyWithoutSuppliersInput } from "./AdminCreateNestedManyWithoutSuppliersInput";
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ItemCreateNestedManyWithoutSuppliersInput } from "./ItemCreateNestedManyWithoutSuppliersInput";
import { ManagerCreateNestedManyWithoutSuppliersInput } from "./ManagerCreateNestedManyWithoutSuppliersInput";
@InputType()
class SupplierCreateInput {
  @ApiProperty({
    required: false,
    type: () => AdminCreateNestedManyWithoutSuppliersInput,
  })
  @ValidateNested()
  @Type(() => AdminCreateNestedManyWithoutSuppliersInput)
  @IsOptional()
  @Field(() => AdminCreateNestedManyWithoutSuppliersInput, {
    nullable: true,
  })
  admins?: AdminCreateNestedManyWithoutSuppliersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstName!: string;

  @ApiProperty({
    required: false,
    type: () => ItemCreateNestedManyWithoutSuppliersInput,
  })
  @ValidateNested()
  @Type(() => ItemCreateNestedManyWithoutSuppliersInput)
  @IsOptional()
  @Field(() => ItemCreateNestedManyWithoutSuppliersInput, {
    nullable: true,
  })
  items?: ItemCreateNestedManyWithoutSuppliersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  lastName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  location!: string;

  @ApiProperty({
    required: false,
    type: () => ManagerCreateNestedManyWithoutSuppliersInput,
  })
  @ValidateNested()
  @Type(() => ManagerCreateNestedManyWithoutSuppliersInput)
  @IsOptional()
  @Field(() => ManagerCreateNestedManyWithoutSuppliersInput, {
    nullable: true,
  })
  manager?: ManagerCreateNestedManyWithoutSuppliersInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  phoneNumber!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  userName!: string;
}
export { SupplierCreateInput };
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
import { AdminWhereInput } from "./AdminWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AdminListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AdminWhereInput,
  })
  @ValidateNested()
  @Type(() => AdminWhereInput)
  @IsOptional()
  @Field(() => AdminWhereInput, {
    nullable: true,
  })
  every?: AdminWhereInput;

  @ApiProperty({
    required: false,
    type: () => AdminWhereInput,
  })
  @ValidateNested()
  @Type(() => AdminWhereInput)
  @IsOptional()
  @Field(() => AdminWhereInput, {
    nullable: true,
  })
  some?: AdminWhereInput;

  @ApiProperty({
    required: false,
    type: () => AdminWhereInput,
  })
  @ValidateNested()
  @Type(() => AdminWhereInput)
  @IsOptional()
  @Field(() => AdminWhereInput, {
    nullable: true,
  })
  none?: AdminWhereInput;
}
export { AdminListRelationFilter };
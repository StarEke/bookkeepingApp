/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ItemWhereUniqueInput } from "../../item/base/ItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ItemCreateNestedManyWithoutManagersInput {
  @Field(() => [ItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ItemWhereUniqueInput],
  })
  connect?: Array<ItemWhereUniqueInput>;
}
export { ItemCreateNestedManyWithoutManagersInput };

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { AdminWhereUniqueInput } from "./AdminWhereUniqueInput";
import { AdminUpdateInput } from "./AdminUpdateInput";

@ArgsType()
class UpdateAdminArgs {
  @Field(() => AdminWhereUniqueInput, { nullable: false })
  where!: AdminWhereUniqueInput;
  @Field(() => AdminUpdateInput, { nullable: false })
  data!: AdminUpdateInput;
}

export { UpdateAdminArgs };

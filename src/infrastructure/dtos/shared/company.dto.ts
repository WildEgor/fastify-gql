import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class CompanyDto {

  @Field(() => ID!)
  @Directive('@external')
    id: string;

  @Field(() => String, { nullable: true })
    test: string;

}

import { IRegisterMobileInput } from '@modules/test/infrastucture/interfaces/input.interfaces';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterMobileInput implements IRegisterMobileInput {

  @Field(() => String)
  public msisdn: string;

  @Field(() => Boolean, { nullable: true })
  public throw?: boolean;
}

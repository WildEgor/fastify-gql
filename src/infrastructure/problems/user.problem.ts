import { Field, ObjectType, PickType } from '@nestjs/graphql';
import { BaseProblem } from '@src/infrastructure/problems/base.problem';
import { ProblemCodes } from '@src/infrastructure/types/problem-codes';

@ObjectType()
export class UserProblem extends PickType(BaseProblem, [
  'message',
  'code',
] as const) {

  @Field({ defaultValue: false })
    mobileExists: boolean;

  public static throw(): UserProblem {
    return new UserProblem();
  }

  // TODO: It's better dont say that this mobile number exists, but only for demo purposes
  public setMobileExists(): UserProblem {
    this.message = 'Mobile number already exists';
    this.code = ProblemCodes.MOBILE_EXIST;
    this.mobileExists = true;
    return this;
  }

}

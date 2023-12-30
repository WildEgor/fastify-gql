import { Field, ObjectType, PickType } from '@nestjs/graphql';
import { BaseProblem } from '@src/infrastructure/problems/base.problem';
import { ProblemCodes } from '@src/infrastructure/types/problem-codes';

@ObjectType()
export class OtpProblem extends PickType(BaseProblem, [
  'message',
  'code',
] as const) {

  @Field({ defaultValue: false })
    codeMalformed: boolean;

  public static throw(): OtpProblem {
    return new OtpProblem();
  }

  public setMalformedCode(): OtpProblem {
    this.message = 'Malformed code';
    this.code = ProblemCodes.OTP_MALFORMED;
    this.codeMalformed = true;
    return this;
  }

}

import { Field, ObjectType } from '@nestjs/graphql';
import { ProblemCodes } from '@src/infrastructure/types/problem-codes';

@ObjectType()
export class BaseProblem {

  @Field({ defaultValue: '' })
    message: string;

  @Field(() => ProblemCodes, { defaultValue: ProblemCodes.UNKNOWN_ERROR })
    code: ProblemCodes;

  public withMessage(msg: string): this {
    this.message = msg;
    this.code = ProblemCodes.UNKNOWN_ERROR;
    return this;
  }

}

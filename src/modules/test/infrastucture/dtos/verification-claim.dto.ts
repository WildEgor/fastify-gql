import { createUnionType, Field, ObjectType } from '@nestjs/graphql';
import { OtpProblem } from '@src/infrastructure/problems/otp.problem';
import { UserProblem } from '@src/infrastructure/problems/user.problem';
import { IVerificationClaim } from '@modules/test/infrastucture/interfaces/response.interfaces';
import { VerificationClaimTypes } from '@src/infrastructure/types/enum';

@ObjectType()
export class VerificationClaimDto implements IVerificationClaim {

  @Field({
    description: 'During this time otp was enabled. Can use for timers.',
    defaultValue: 0,
  })
    duration!: number;

  @Field({
    description: 'During this time otp was enabled. Can use for timers.',
    defaultValue: new Date(),
  })
    expiredAt!: Date;

  @Field({ description: 'Develop code', defaultValue: '0000' })
    code?: string;

  @Field(() => VerificationClaimTypes, {
    description: VerificationClaimTypes.VERIFICATION_CODE,
    defaultValue: '',
  })
    type!: VerificationClaimTypes;

  constructor(props: IVerificationClaim) {
    Object.assign(this, props);
  }
}

export const VerificationClaimResult = createUnionType({
  name: 'VerificationClaimResult',
  description: 'Contains verification or user/otp problem',
  types: () => [VerificationClaimDto, UserProblem, OtpProblem] as const,
});

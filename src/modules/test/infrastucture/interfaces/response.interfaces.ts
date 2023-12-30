import { OtpProblem } from '@src/infrastructure/problems/otp.problem';
import { UserProblem } from '@src/infrastructure/problems/user.problem';
import { VerificationClaimTypes } from '@src/infrastructure/types/enum';

export interface IVerificationClaim {
  type: VerificationClaimTypes;
  code?: string;
  duration: number;
  expiredAt: Date;
}

export type IVerificationClaimResult =
  | IVerificationClaim
  | UserProblem
  | OtpProblem;

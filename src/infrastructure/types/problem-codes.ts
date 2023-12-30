import { registerEnumType } from '@nestjs/graphql';

export enum ProblemCodes {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  VERIFICATION_CODE_EXPIRED = 'VERIFICATION_CODE_EXPIRED',
  OTP_MALFORMED = 'OTP_MALFORMED',
  MOBILE_EXIST = 'MOBILE_EXIST',
}

registerEnumType(ProblemCodes, {
  name: 'ProblemCodes',
  description: 'Problem codes',
});

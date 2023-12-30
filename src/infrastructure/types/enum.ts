import { registerEnumType } from '@nestjs/graphql';

export enum ActivityStatus {
  ACTIVE = 'ACTIVE',
  OFFLINE = 'OFFLINE',
}

registerEnumType(ActivityStatus, {
  name: 'ActivityStatus',
  description: 'The activity status',
});

export enum VerificationClaimTypes {
  OTP = 'OTP',
  VERIFICATION_CODE = 'VERIFICATION_CODE',
}

registerEnumType(VerificationClaimTypes, {
  name: 'VerificationClaimTypes',
});

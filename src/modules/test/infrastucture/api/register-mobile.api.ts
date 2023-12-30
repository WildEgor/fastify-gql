import { applyDecorators } from '@nestjs/common';
import { Mutation } from '@nestjs/graphql';
import {
  VerificationClaimResult,
} from '@modules/test/infrastucture/dtos/verification-claim.dto';

export const ApiRegisterMobile = (): MethodDecorator => applyDecorators(
  Mutation(() => [VerificationClaimResult]),
);

import { applyDecorators } from '@nestjs/common';
import { ResolveField } from '@nestjs/graphql';
import { ActivityStatus } from '@src/infrastructure/types/enum';

export const ApiCompanyStatus = (): MethodDecorator => applyDecorators(
  ResolveField(() => ActivityStatus),
);

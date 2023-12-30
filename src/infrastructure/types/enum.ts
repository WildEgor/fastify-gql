import { registerEnumType } from '@nestjs/graphql';

export enum ActivityStatus {
  ACTIVE = 'ACTIVE',
  OFFLINE = 'OFFLINE',
}

registerEnumType(ActivityStatus, {
  name: 'ActivityStatus',
  description: 'The activity status',
});

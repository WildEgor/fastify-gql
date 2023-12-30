import { Resolver } from '@nestjs/graphql';
import { CompanyDto } from '@src/infrastructure/dtos/shared/company.dto';
import { ActivityStatus } from '@src/infrastructure/types/enum';
import { ApiCompanyStatus } from '@modules/test/infrastucture/api/company-status.api';

@Resolver(() => CompanyDto)
export class CompanyResolver {

  // For demonstration purposes only
  // eslint-disable-next-line require-await
  @ApiCompanyStatus()
  public async status(): Promise<ActivityStatus> {
    return ActivityStatus.ACTIVE;
  }

}

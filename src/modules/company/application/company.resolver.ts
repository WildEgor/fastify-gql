import { Resolver } from '@nestjs/graphql';
import { ApiCompanyStatus } from '@modules/company/infrastucture/api/company-status.api';
import { CompanyDto } from '@src/infrastructure/dtos/shared/company.dto';
import { ActivityStatus } from '@src/infrastructure/types/enum';

@Resolver(() => CompanyDto)
export class CompanyResolver {

  // For demonstration purposes only
  // eslint-disable-next-line require-await
  @ApiCompanyStatus()
  public async status(): Promise<ActivityStatus> {
    return ActivityStatus.ACTIVE;
  }

}

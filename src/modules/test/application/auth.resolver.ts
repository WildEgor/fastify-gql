import { Resolver } from '@nestjs/graphql';
import { ApiRegisterMobile } from '@modules/test/infrastucture/api/register-mobile.api';
import { Input } from '@src/infrastructure/decorators/gql/input.decorator';
import { RegisterMobileInput } from '@modules/test/infrastucture/dtos/register-mobile.dto';
import { UserProblem } from '@src/infrastructure/problems/user.problem';
import { IVerificationClaimResult } from '@modules/test/infrastucture/interfaces/response.interfaces';
import { VerificationClaimDto } from '@modules/test/infrastucture/dtos/verification-claim.dto';
import { plainToClass } from 'class-transformer';
import { VerificationClaimTypes } from '@src/infrastructure/types/enum';

@Resolver()
export class AuthResolver {

    // DEMO: registerMobile
    @ApiRegisterMobile()
    public async registerMobile(
      @Input() input: RegisterMobileInput,
    ): Promise<IVerificationClaimResult[]> {

      if (input?.throw) {
        return [UserProblem.throw().setMobileExists()]
      }

      return [plainToClass(VerificationClaimDto, {
        duration: 1000,
        expiredAt: new Date(),
        code: '0000',
        type: VerificationClaimTypes.VERIFICATION_CODE,
      })]
    }
}

import { Module } from '@nestjs/common';
import { AuthResolver } from '@modules/test/application/auth.resolver';
import { CompanyResolver } from '@modules/test/application/company.resolver';
import { CrudResolver } from '@modules/test/application/crud.resolver';

@Module({
  providers: [
    CrudResolver,
    CompanyResolver,
    AuthResolver,
  ],
})
export class TestModule {
}

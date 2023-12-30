import { Module } from '@nestjs/common';
import { CompanyResolver } from '@modules/company/application/company.resolver';
import { CrudResolver } from '@modules/company/application/crud.resolver';

@Module({
  providers: [
    CrudResolver,
    CompanyResolver,
  ],
})
export class CompanyModule {
}

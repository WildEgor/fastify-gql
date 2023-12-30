import path from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusFederationDriver, MercuriusFederationDriverConfig } from '@nestjs/mercurius';
import { ConfigModule } from '@config/config.module';
import { TestModule } from '@modules/test/test.module';
import { CompanyDto } from '@src/infrastructure/dtos/shared/company.dto';

@Module({
  imports: [
    GraphQLModule.forRootAsync<MercuriusFederationDriverConfig>({
      driver: MercuriusFederationDriver, // we use this because fastify dont support apollo v4 yet
      useFactory: () => ({
        fieldResolverEnhancers: ['guards'],
        federationMetadata: true,
        // typePaths: ['./**/*.graphql'],
        autoSchemaFile: {
          federation: 1,
          path: path.join(process.cwd(), 'graphql', 'schema.graphql'),
        },
        graphiql: true,
        context: (ctx): unknown => ({ ctx }),
        // definitions: {
        //   path: join(process.cwd(), 'src/graphql.classes.ts'),
        //   outputAs: 'class',
        // },
        cors: {
          origin: '*',
          credentials: true,
        },
        subscription: {
          onConnect: (connectionParams): unknown => connectionParams?.payload,
        },
        buildSchemaOptions: {
          orphanedTypes: [CompanyDto],
        },
      }),
    }),
    ConfigModule,
    TestModule,
  ],
})
export class AppModule {
}

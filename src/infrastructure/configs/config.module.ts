import { Global, Module } from '@nestjs/common';
import * as NestConfig from '@nestjs/config';
import { AppConfig } from './app.config';

@Global()
@Module({
  imports: [
    NestConfig.ConfigModule.forRoot({
      envFilePath: ['.env', '.env.local'],
    }),
  ],
  providers: [
    NestConfig.ConfigService,
    AppConfig,
  ],
  exports: [
    AppConfig,
  ],
})
export class ConfigModule {
}

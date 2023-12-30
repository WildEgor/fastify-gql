import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfig {

  public readonly name: string;
  public readonly port: number;
  public readonly isProduction: boolean;

  constructor(configService: ConfigService) {
    this.name = configService.get('APP_NAME');
    this.port = configService.get('APP_PORT');
    this.isProduction = configService.get('APP_PRODUCTION');
  }

  public get baseUrl(): string {
    return process.platform === 'win32' ? 'http://localhost' : 'http://127.0.0.1';
  }

}

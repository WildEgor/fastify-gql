import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppConfig } from '@config/app.config';
import { AppModule } from '@src/app.module';

const logger = new Logger('Bootstrap');

const bootstrap = async function bootstrap(): Promise<void> {
  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter({
        trustProxy: true,
        bodyLimit: 10048576,
      }),
    );
    app.enableShutdownHooks();
    app.setGlobalPrefix('api');
    app.enableVersioning({
      type: VersioningType.URI,
    });

    const appConfig = app.get(AppConfig);

    await app.listen(appConfig.port, '0.0.0.0', () => {
      logger.debug(`Service (HTTP) available at ${appConfig.baseUrl}:${appConfig.port}`);
      logger.debug(`Service (GQL) available at ${appConfig.baseUrl}:${appConfig.port}/graphql`);
      logger.debug(`Swagger available at ${appConfig.baseUrl}:${appConfig.port}/api/docs`);
      logger.debug(`GraphiQL available at ${appConfig.baseUrl}:${appConfig.port}/graphiql`);
    });
  }
  catch (e) {
    logger.error(e);
    process.exit();
  }
};

bootstrap()
  .catch((e) => {
    logger.error(e);
    throw e;
  });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  app.useLogger(['error', 'warn', 'log', 'debug', 'verbose']);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(3003);
  console.log('📦 Products Service is running on http://localhost:3003');
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Teachers servisiga yo'naltirish
  app.use(
    '/teachers',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    }),
  );

  // Students servisiga yo'naltirish
  app.use(
    '/students',
    createProxyMiddleware({
      target: 'http://localhost:3002',
      changeOrigin: true,
    }),
  );

  // Products servisiga yo'naltirish
  app.use(
    '/products',
    createProxyMiddleware({
      target: 'http://localhost:3003',
      changeOrigin: true,
    }),
  );

  await app.listen(8000);
}
bootstrap();

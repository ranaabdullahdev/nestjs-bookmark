import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe( {whitelist: true}));
  await app.listen(8001);
  console.log(' nestjs app is running on port 8001');
}
bootstrap();

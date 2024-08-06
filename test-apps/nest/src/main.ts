import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('yolo');
  await app.listen(3000);
  const url = await app.getUrl();
  console.log(`Application is running on: ${url}`);
}
bootstrap();

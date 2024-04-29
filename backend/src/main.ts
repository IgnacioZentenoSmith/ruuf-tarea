import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('backend'); // This adds /backend to all routes
  app.enableCors(); // Enable CORS for all routes
  app.useGlobalPipes(
    new ValidationPipe({ // Automatically transform payloads to be instances of DTO classes
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

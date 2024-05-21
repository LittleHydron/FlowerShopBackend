import { AppModule } from '@modules/AppModule';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Accept"
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Flower Shop')
    .setDescription('The FlowerShop API description')
    .setVersion('1.0')
    .addTag('flowers')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(2700);
  console.log('Server is running on http://localhost:2700');
}

bootstrap();

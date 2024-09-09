import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// define the bootstrap function
async function bootstrap() {
  // create the Nest application instance by passing the AppModule to the NestFactory
  const app = await NestFactory.create(AppModule);

  // set up Swagger UI
  const config = new DocumentBuilder()
    .setTitle('Recipe API') // set the title of the API
    .setDescription('API for managing recipes') // set the description of the API
    .setVersion('1.0') // set the version of the API
    .addTag('recipes') // add a tag for the API
    .build();

  // create the Swagger document using the application instance and the document configuration
  const document = SwaggerModule.createDocument(app, config);

  // set up the Swagger UI at the '/api' path
  SwaggerModule.setup('api', app, document);

  // start the application on port 8080
  await app.listen(8080);
}

// call the bootstrap function to start the application
bootstrap();

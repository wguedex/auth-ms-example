import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envs } from './config/envs';

async function bootstrap() {
  const logger = new Logger('Auth-ms-main') 
 
  // const app = await NestFactory.create(AppModule);

  console.log(envs.natsServers)
 
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: envs.natsServers,
      }
    },
  );

  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    })
    );
 
  // await app.listen(envs.port);
  await app.listen();
   
  logger.log(`Products Microservice running on port ${envs.port}`)  
}
bootstrap();

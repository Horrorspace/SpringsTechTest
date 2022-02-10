import {NestFactory} from "@nestjs/core";
import {NestExpressApplication} from '@nestjs/platform-express';
import {AppModule} from './app.module';

export async function start() {
    const PORT: number = Number(process.env.PORT) || 3000;
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
   
    await app.listen(PORT);
    console.log(`HTTP server has been started on port ${PORT}...`);
}

start();
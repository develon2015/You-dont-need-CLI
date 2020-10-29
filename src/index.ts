import { NestFactory } from '@nestjs/core';
import AppModule from './app.module';
import { ip, } from '@develon/js/lib/node';
import requestEntry from './util/requestEntry';

let port: number = Math.round(1024 + Math.random() * (65535 - 1024));
port = 80;

void async function () {
  let app = await NestFactory.create(AppModule);
  app.use(requestEntry);
  await app.listen(port);
  console.log(`Server started on: http://${ip().ipv4[0]}:${port}`);
}();
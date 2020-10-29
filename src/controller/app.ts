import { Controller, Get } from '@nestjs/common';

@Controller('/')
export default class AppController {
  @Get()
  findAll(): string {
    return '你好，世界';
  }
};
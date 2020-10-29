import { Module } from '@nestjs/common';
import AppController from './controller/app';

@Module({
  controllers: [AppController],
})
export default class AppModule {
  constructor() {
    console.log('模块初始化');
  }
};
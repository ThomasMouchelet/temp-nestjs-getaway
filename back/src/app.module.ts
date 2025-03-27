import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Gateway } from './gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Gateway],
})
export class AppModule {}

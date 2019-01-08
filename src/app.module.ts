import { Module } from '@nestjs/common';
import { BrandModule } from './modules/brand/brand.module';

@Module({
  imports: [BrandModule]
})
export class AppModule {}

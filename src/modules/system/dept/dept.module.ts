import { Module } from '@nestjs/common';
import { DeptController } from './dept.controller';
import { DeptService } from './dept.service';

@Module({
  imports: [],
  controllers: [DeptController],
  providers: [DeptService],
  exports: [DeptService],
})
export class DeptModule {}

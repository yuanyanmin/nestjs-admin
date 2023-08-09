import { Controller } from '@nestjs/common';
import { DeptService } from './dept.service';

@Controller('system/dept')
export class DeptController {
  constructor(private readonly deptService: DeptService) {}
}

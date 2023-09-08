import { Controller, Get } from '@nestjs/common';
import { ClientRequest } from 'http';

@Controller('dmb(/)?')
export class DmbController {
  @Get()
  getDmb(): string {
    return 'boo!';
  }
}

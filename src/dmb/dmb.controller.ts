import { Controller, Get } from '@nestjs/common';

@Controller('dmb(/)?')
export class DmbController {
  @Get()
  getDmb(): string {
    return 'boo!';
  }
}

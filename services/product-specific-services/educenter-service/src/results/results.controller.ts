import { Controller, Get } from '@nestjs/common';

@Controller('results')
export class ResultsController {
  @Get()
  findAll() {
    return [];
  }
}
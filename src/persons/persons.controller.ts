import { Controller, Post, Get, Body } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person } from './entities/person.entity';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto): Promise<Person> {
    return this.personsService.createPerson(createPersonDto);
  }

  @Get()
  findAll(): Promise<Person[]> {
    return this.personsService.getPersons();
  }
}

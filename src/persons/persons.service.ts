import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePersonDto } from './dto/create-person.dto';
import { CreatePersonCommand } from './commands/create-person.command';
import { GetPersonsQuery } from './queries/get-persons.query';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonsService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createPerson(createPersonDto: CreatePersonDto): Promise<Person> {
    const { firstName, lastName, age } = createPersonDto;
    return this.commandBus.execute(new CreatePersonCommand(firstName, lastName, age));
  }

  async getPersons(): Promise<Person[]> {
    return this.queryBus.execute(new GetPersonsQuery());
  }
}

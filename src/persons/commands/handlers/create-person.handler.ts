import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../../entities/person.entity';
import { CreatePersonCommand } from '../create-person.command';

@CommandHandler(CreatePersonCommand)
export class CreatePersonHandler implements ICommandHandler<CreatePersonCommand> {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async execute(command: CreatePersonCommand): Promise<Person> {
    const { firstName, lastName, age } = command;
    const person = this.personRepository.create({ firstName, lastName, age });
    return this.personRepository.save(person);
  }
}

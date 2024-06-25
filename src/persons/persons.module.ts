import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';
import { Person } from './entities/person.entity';
import { CreatePersonHandler } from './commands/handlers/create-person.handler';
import { GetPersonsHandler } from './queries/handlers/get-persons.handler';

@Module({
  imports: [
    TypeOrmModule.forFeature([Person]),
    CqrsModule,
  ],
  controllers: [PersonsController],
  providers: [PersonsService, CreatePersonHandler, GetPersonsHandler],
})
export class PersonsModule {}

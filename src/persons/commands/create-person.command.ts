export class CreatePersonCommand {
    constructor(
      public readonly firstName: string,
      public readonly lastName: string,
      public readonly age: number,
    ) {}
  }
  
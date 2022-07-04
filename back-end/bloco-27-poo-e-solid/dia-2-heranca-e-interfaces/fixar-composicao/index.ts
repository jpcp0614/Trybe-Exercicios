interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  public log(message: string): void {
    return console.log('Logger: ' + message);
  }
}

class ConsoleLogger2  implements Logger {
  public log(message: string): void {
    return console.log('Logger2: ' + message);
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {

  constructor(public logger: Logger = new ConsoleLogger()) {}

  public save(key: string, value: string):void {
    return this.logger.log(`Saving ${key} -> ${value}`);
  }
}

const objLogger = new ConsoleLogger();
const objLogger2 = new ConsoleLogger2();

const objExempleDatabase1 = new ExampleDatabase(objLogger);
const objExempleDatabase2 = new ExampleDatabase(objLogger2);
const objExempleDatabase3 = new ExampleDatabase();

objExempleDatabase1.save('key1', 'value1');
objExempleDatabase2.save('key2', 'value2');

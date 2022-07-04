import express from 'express';
import router from './routes/routes';
import connection from './models/connection';

class App {
  public express: express.Application;

  public connection: void;

  constructor() {
    this.express = express();
    this.middlewares();
    this.connection = connection('mongodb://localhost:27017/world_cups');
    this.router();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private router(): void {
    this.express.use(router);
  }
}

export default App;
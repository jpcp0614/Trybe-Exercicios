// models/connection.ts

import { connect } from 'mongoose';

const connection = (url: string) => {
  try {
    connect(url);
  } catch (error) {
    console.log(error);
  }
}

// import mongoose from 'mongoose';

// const connection = (mongoDatabaseURI = 'mongodb://localhost:27017/world_cups') =>
//   mongoose.connect(mongoDatabaseURI);

export default connection;
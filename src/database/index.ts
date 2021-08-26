import { createConnection } from 'typeorm';

async function connectToDatabase() {
  try {
    const connection = await createConnection();

    console.log('Connected to database!');
    return connection;
  } catch (err) {
    console.log('Error to connect to database::');
    console.log(err);
  }
}

export { connectToDatabase };

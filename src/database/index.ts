import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'postgrespass',
  database: 'rentx',
});

const createConnection = (host = 'rentx_database'): Promise<DataSource> => AppDataSource.setOptions({ host }).initialize();

export { AppDataSource, createConnection };

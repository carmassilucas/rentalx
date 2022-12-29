import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'postgrespass',
  database: 'rentx',
  migrations: ['./src/database/migrations/*.ts'],
  entities: ['./src/modules/cars/entities/*.ts'],
});

const createConnection = (host = 'rentx_database'): Promise<DataSource> => dataSource.setOptions({ host }).initialize();

export { dataSource, createConnection };

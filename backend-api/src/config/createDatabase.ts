import { Client } from 'pg';

async function createDatabase() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: 'admin',
    database: 'postgres', 
  });

  await client.connect();

  const dbName = 'conecthus'; 
  const dbUser = 'admin';
  const dbPassword = 'admin';

  const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${dbName}'`);
  if (res.rowCount === 0) {
    await client.query(`CREATE DATABASE ${dbName}`);
    console.log(`Banco de dados ${dbName} criado com sucesso!`);
  } else {
    console.log(`Banco de dados ${dbName} já existe.`);
  }
  const userRes = await client.query(`SELECT 1 FROM pg_roles WHERE rolname = '${dbUser}'`);
  if (userRes.rowCount === 0) {
    await client.query(`CREATE USER ${dbUser} WITH PASSWORD '${dbPassword}'`);
    console.log(`Usuário ${dbUser} criado com sucesso!`);
  } else {
    console.log(`Usuário ${dbUser} já existe.`);
  }

  await client.query(`GRANT ALL PRIVILEGES ON DATABASE ${dbName} TO ${dbUser}`);
  console.log(`Permissões concedidas ao usuário ${dbUser} no banco de dados ${dbName}`);

  const newDbClient = new Client({
    host: 'localhost',
    port: 5432,
    user: dbUser,
    password: dbPassword,
    database: dbName,
  });

  await newDbClient.connect();

  await newDbClient.query(`
    CREATE TABLE IF NOT EXISTS "user" (
      "id" SERIAL PRIMARY KEY,
      "nome" VARCHAR(100) NOT NULL,
      "email" VARCHAR(100) UNIQUE NOT NULL,
      "matricula" VARCHAR(100) NOT NULL,
      "senha" VARCHAR(100) NOT NULL
    );
  `);
  console.log('Tabela "user" criada com sucesso!');

  await newDbClient.query(`
    INSERT INTO "user" ("nome", "email", "matricula", "senha")
    VALUES ('admin', 'admin@example.com', 'admin', 'admin');
  `);
  console.log('Usuário padrão inserido com sucesso!');

  await newDbClient.end();
  await client.end();
}

createDatabase().catch((err) => console.error('Erro ao criar o banco de dados ou tabela:', err));

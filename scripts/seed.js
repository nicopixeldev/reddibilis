const { db } = require('@vercel/postgres');
const {
  invoices,
  customers,
  revenue,
  users,
  hipotecas
} = require('../app/lib/placeholder-data.js');

const bcrypt = require('bcrypt');

// async function seedUsers(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     // Create the "users" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS users (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL
//       );
//     `;

//     console.log(`Created "users" table`);

//     // Insert data into the "users" table
//     const insertedUsers = await Promise.all(
//       users.map(async (user) => {
//         const hashedPassword = await bcrypt.hash(user.password, 10);
//         return client.sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//       }),
//     );

//     console.log(`Seeded ${insertedUsers.length} users`);

//     return {
//       createTable,
//       users: insertedUsers,
//     };
//   } catch (error) {
//     console.error('Error seeding users:', error);
//     throw error;
//   }
// }

async function seedInvoices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_id UUID NOT NULL,
    amount INT NOT NULL,
    status VARCHAR(255) NOT NULL,
    date DATE NOT NULL
  );
`;

    console.log(`Created "invoices" table`);

    // Insert data into the "invoices" table
    const insertedInvoices = await Promise.all(
      invoices.map(
        (invoice) => client.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedInvoices.length} invoices`);

    return {
      createTable,
      invoices: insertedInvoices,
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "customers" table`);

    // Insert data into the "customers" table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedCustomers.length} customers`);

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error('Error seeding customers:', error);
    throw error;
  }
}

async function seedRevenue(client) {
  try {
    // Create the "revenue" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS revenue (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL
      );
    `;

    console.log(`Created "revenue" table`);

    // Insert data into the "revenue" table
    const insertedRevenue = await Promise.all(
      revenue.map(
        (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedRevenue.length} revenue`);

    return {
      createTable,
      revenue: insertedRevenue,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

// reddibilis
async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
          INSERT INTO users (id, name, email, password)
          VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedHipotecas(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "hipotecas" table if it doesn't exist
    const createTable = await client.sql`
    DROP TABLE IF EXISTS hipotecas;
    CREATE TABLE IF NOT EXISTS hipotecas (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      nombre VARCHAR(255) NOT NULL,
      plazo_anos INT NOT NULL,
      total_capital DECIMAL(16,2) NOT NULL,
      porcentaje_sobre_compra INT NOT NULL,
      tipo VARCHAR(255) NOT NULL,
      interes DECIMAL(16,2) NOT NULL,
      diferencial_variable DECIMAL(16,2) NULL,
      interes_mensual DECIMAL(16,2) NULL,
      num_coutas INT NULL,
      cuota_mensual DECIMAL(16,2) NULL,
      total_pagar DECIMAL(16,2) NULL,
      total_intereses DECIMAL(16,2) NULL,
      ano_media_intereses DECIMAL(16,2) NULL,
      primer_ano_intereses DECIMAL(16,2) NULL
    );
    `;

    console.log(`Created "hipotecas" table`);

    // Insert data into the "invoices" table
    const insertedHipotecas = await Promise.all(
      hipotecas.map(
        (hipoteca) => client.sql`
          INSERT INTO hipotecas (
            user_id,
            nombre,
            plazo_anos,
            total_capital,
            porcentaje_sobre_compra,
            tipo,
            interes,
            diferencial_variable,
            interes_mensual,
            num_coutas,
            cuota_mensual,
            total_pagar,
            total_intereses,
            ano_media_intereses,
            primer_ano_intereses
          )
          VALUES (
            ${hipoteca.user_id},
            ${hipoteca.nombre},
            ${hipoteca.plazo_anos},
            ${hipoteca.total_capital},
            ${hipoteca.porcentaje_sobre_compra},
            ${hipoteca.tipo},
            ${hipoteca.interes},
            ${hipoteca.diferencial_variable},
            ${hipoteca.interes_mensual},
            ${hipoteca.num_coutas},
            ${hipoteca.cuota_mensual},
            ${hipoteca.total_pagar},
            ${hipoteca.total_intereses},
            ${hipoteca.ano_media_intereses},
            ${hipoteca.primer_ano_intereses}
          )
          ON CONFLICT (id) DO NOTHING;
        `
      ),
    );
    
    console.log(`Seeded ${insertedHipotecas.length} hipotecas`);

    return {
      createTable,
      hipotecas: insertedHipotecas,
    };

  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}



async function main() {
  const dbClient = await db.connect();

  // await seedUsers(dbClient);
  // await seedCustomers(dbClient);
  // await seedInvoices(dbClient);
  // await seedRevenue(dbClient);

  await seedUsers(dbClient);
  await seedHipotecas(dbClient);

  await dbClient.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});

import knex from 'knex';
import path from 'path';
// path serve para unir caminhos, ou seja, apontar o arquivo que voce deseja.

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;
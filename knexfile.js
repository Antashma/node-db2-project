// Update with your config settings.

module.exports = {


  
    client: 'sqlite3',
    connection: {
      filename: './data/dealer.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }

};

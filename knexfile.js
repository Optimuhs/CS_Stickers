// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/crud-webstore'
    
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-crud-webstore'
    
  },

  

};

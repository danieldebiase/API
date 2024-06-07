exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists('notes')
    .createTable('notes', function(table) {
      table.increments('id');
      table.text('title').notNullable();
      table.text('description').notNullable();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('notes');
};

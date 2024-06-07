exports.up = knex => knex.schema.createTable("links", table => {
  table.increments("id");
  table.text("url").notNullable();

  table.integer("note_id").references("notes").inTable("users").onDelete("CASCADE");
  table.timestamp("creates_at").default(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable("links");

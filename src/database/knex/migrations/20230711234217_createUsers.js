exports.up = knex => knex.schema.createTable("users", table => {
  table.increments("id")
  table.string("name", 30).notNullable()
  table.string("email", 30).notNullable()
  table.string("password", 100).notNullable()
  table.text("city").notNullable()
  table.timestamp("created_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("users")
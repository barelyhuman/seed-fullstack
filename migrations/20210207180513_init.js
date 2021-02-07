exports.up = function (knex) {
  return knex.schema.createTable('posts', function (table) {
    table.uuid('id').unique().primary().notNullable()
    table.string('title').notNullable()
    table.text('description').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('posts')
}

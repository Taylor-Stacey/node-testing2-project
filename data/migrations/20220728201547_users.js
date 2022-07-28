exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('name', 200).notNullable();
  });
};

exports.down = function(knex) {
  //undo the operation in up
  return knex.schema.dropTableIfExists('users');
};
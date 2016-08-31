
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users',function(t){
    t.increments('id')
    t.string('userName')
    t.string('password')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};

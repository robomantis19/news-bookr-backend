
exports.up = function(knex) {
    return knex.schema.createTable('users', users => { 
        users.increments();
        users.string('username', 128).notNullable().unique();
        users.string('password', 128).notNullable();
    })
    .createTable('Favorites', tbl => { 
        tbl.increments();
        tbl.string('image').notNullable()
        tbl.string('title', 256)
        tbl.string('description', 2048)
        tbl.float('starRating')
        tbl.integer('user_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
        
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Favorites')
        .dropTableIfExists('users')
};

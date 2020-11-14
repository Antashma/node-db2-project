
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.text('VIN', 128).unique().notNullable();
        tbl.text('Make', 25).notNullable();
        tbl.text('Model', 25).notNullable();
        tbl.bigint('Mileage').unsigned().notNullable();
        tbl.text('TransmissionType')
        tbl.text('TitleStatus')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};

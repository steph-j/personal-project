exports.up = function (knex, Promise) {
  console.log('Creating trips')
  return knex.schema.createTableIfNotExists('trips', function (table) {
    table.increments('id')
    table.string('state')
    table.string('destination')
    table.string('description')
    table.string('flights')
    table.string('passport')
    table.string('dates')
    table.string('length')
    table.string('visa')
    table.string('insurance')
    table.string('hotel')
    table.string('tour')
    table.string('temps')
    table.string('expenses')
  })
}

exports.down = function (knex, Promise) {
  console.log('Dropping trips')
  return knex.schema.dropTableIfExists('trips').then(function () {
    console.log('trips table was dropped')
  })
}

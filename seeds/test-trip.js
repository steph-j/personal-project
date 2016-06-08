exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('trips').del(),

    // Inserts seed entries
    knex('trips').insert({
      flights: 'NZ001 AKL LAX 2300 1001',
      passport: '15-05-2015',
      dates: '15 Jan 2016 - 27 Jan 2016',
      length: 'No',
      visa: '7 days',
      temps: '30C'
    })

  );
};

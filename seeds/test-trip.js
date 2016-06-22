exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('trips').del(),

    // Inserts seed entries
    knex('trips').insert({
      state: 'current',
      destination: 'LA',
      description: 'This is a description',
      flights: 'NZ001 AKL LAX 2300 1001',
      passport: '15-05-2015',
      dates: '15 Jan 2016 - 27 Jan 2016',
      length: '12 days',
      visa: 'online authorisation needed',
      insurance: 'travelSafe E2461544681215646',
      hotel: 'Hilton',
      tour: 'Away with the faries',
      temps: '30C',
      expenses: '$1538'
    })

  );
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Food', description: 'Non perishables, energy for humans' }, //1
        {resource_name: 'Time', description: 'The rhythm of reality'}, //2
        {resource_name: 'Compassion', description: 'Empathy for all'}, //3
        {resource_name: 'Propaganda', description: 'Heavily opinionated, subtly coercive form of education'}, //4
        {resource_name: 'Arms', description: 'Boom'}, //5
        {resource_name: 'Militia', description: 'Grass roots brass shoots'}, //6
        {resource_name: 'Books', description: 'Knowledge (Power)'}, //7
      ]);
    });
};

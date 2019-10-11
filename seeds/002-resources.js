
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Food'},
        {resource_name: 'Time'},
        {resource_name: 'Compassion'},
        {resource_name: 'Propaganda'},
        {resource_name: 'Arms'},
        {resource_name: 'Militia'},
        {resource_name: 'Books'},
      ]);
    });
};

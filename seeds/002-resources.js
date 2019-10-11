
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Food'}, //1
        {resource_name: 'Time'}, //2
        {resource_name: 'Compassion'}, //3
        {resource_name: 'Propaganda'}, //4
        {resource_name: 'Arms'}, //5
        {resource_name: 'Militia'}, //6
        {resource_name: 'Books'}, //7
      ]);
    });
};

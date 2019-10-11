
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects_resources').insert([
        {colName: 'rowValue1'},
      ]);
    });
};

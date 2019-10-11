
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Feed The Homeless'},
        {project_name: 'Start A Revolution'},
        {project_name: 'Stay Inside All Day'},
      ]);
    });
};

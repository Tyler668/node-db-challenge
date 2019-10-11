exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Feed The Homeless', description: 'Give food to the needy across the world', complete: Boolean(Number("0"))},
        {project_name: 'Start A Revolution', description: 'Give Big Brother a taste of his own medicine', complete: Boolean(Number("0"))},
        {project_name: 'Stay Inside All Day', description: 'Become acquainted with yourself', complete: Boolean(Number("0"))},
      ]);
    });
};

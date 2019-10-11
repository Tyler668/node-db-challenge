
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Feed The Homeless', description: 'Give food to the needy across the world', complete: false},
        {project_name: 'Start A Revolution', description: 'Give Big Brother a taste of his own medicine', complete: false},
        {project_name: 'Stay Inside All Day', description: 'Become acquainted with yourself', complete: false},
      ]);
    });
};

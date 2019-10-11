
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, task_name: 'Gather volunteers'}, //1
        {project_id: 1, task_name: 'Set up soup kitchen'}, //2 
        {project_id: 1, task_name: 'Get cookin'}, //3

        {project_id: 2, task_name: 'Distribute propaganda'}, //4
        {project_id: 2, task_name: 'Disrupt the means of production'}, //5
        {project_id: 2, task_name: 'Formalize demands'}, //6

        {project_id: 3, task_name: 'Recluse oneself'}, //7
        {project_id: 3, task_name: 'Feign illness to appease societal expectations for socialization'}, //8
        {project_id: 3, task_name: 'Binge watch BBC documentaries and be happy'},//9
      ]);
    });
};

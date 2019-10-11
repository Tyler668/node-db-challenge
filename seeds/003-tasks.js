
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, task_name: 'Gather volunteers', description: 'Find people high in empathy and time', notes: '', complete: Boolean(Number("0"))}, //1
        {project_id: 1, task_name: 'Set up soup kitchen', description: 'Find location for your operation', notes: '', complete: Boolean(Number("0"))}, //2 
        {project_id: 1, task_name: 'Get cookin', description: 'Heat food until it tastes goodder', notes: '', complete: Boolean(Number("0"))}, //3

        {project_id: 2, task_name: 'Distribute propaganda', description: 'Throw flyers from rooftops', notes: '', complete: Boolean(Number("0"))}, //4
        {project_id: 2, task_name: 'Disrupt the means of production', description: 'Unplug robots', notes: '', complete: Boolean(Number("0"))}, //5
        {project_id: 2, task_name: 'Formalize demands', description: 'Aggressively suggest a course of action for your adversary', notes: '', complete: Boolean(Number("0"))}, //6

        {project_id: 3, task_name: 'Recluse oneself', description: 'Stay inside, forever', notes: '', complete: false}, //7
        {project_id: 3, task_name: 'Cover bases', description: 'Feign illness to appease societal expectations for socialization', notes: '', complete: Boolean(Number("0"))}, //8
        {project_id: 3, task_name: 'Consume media', description: 'Binge watch BBC documentaries and be happy', notes: '', complete: Boolean(Number("0"))},//9
      ]);
    });
};

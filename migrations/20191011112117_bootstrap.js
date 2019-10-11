
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl =>{
      tbl.increments()
      tbl.text('project_name', 128).unique().notNullable();
  })

  .createTable('resources', tbl =>{  // Many to many, resources to projects
    tbl.increments()
    tbl.text('resource_name', 128);
})

.createTable('tasks', tbl =>{   //One to many, task to projects
    tbl.increments()
    tbl.text('task_name', 128);

    tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
})


};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};

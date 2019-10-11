
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.text('project_name', 128).unique().notNullable(); //potentially switch to strings if it ends up mattering
            tbl.text('description', 256);
            tbl.boolean('complete').notNullable;
        })

        .createTable('resources', tbl => {  // Many to many, resources to projects
            tbl.increments();
            tbl.text('resource_name', 128);
            tbl.text('description', 256);
 
        })

        .createTable('tasks', tbl => {   // One to many, task to projects
            tbl.increments();

            tbl.text('task_name', 128);
            tbl.text('description', 256);
            tbl.text('notes', 256);
            tbl.boolean('complete').notNullable;

            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })

        .createTable('projects_resources', tbl => { // Link resources and projects
            tbl.increments()

            // FK for projects
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            // FK for resources
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })


};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};

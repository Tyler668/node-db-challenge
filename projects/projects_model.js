const db = require('../db-config.js');

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask
};

function getProjects() {
    return db('projects');
    
}

function getResources() {
    return db('resources');
}

function getTasks() {


    return db('tasks')
        .join('projects', 'projects.id', '=', 'tasks.project_id')
        .select('tasks.id', 'projects.project_name', 'tasks.task_name', 'tasks.description', 'tasks.complete');

    }

function addProject(project) {
    return db('projects')
        .insert(project);
}

function addResource(resource) {
    return db('resources')
        .insert(resource);
}


function addTask(task) {
    return db('tasks')
        .insert(task);
}

// function findSteps(schemeID) {
//     return db('steps')
//         .join('schemes', 'steps.scheme_id', '=', 'schemes.id')
//         .select('schemes.scheme_name', 'steps.*')
//         .where({ scheme_id: schemeID })
//         .orderBy('step_number')
// }



// function update(scheme, id) {
//     return db('schemes')
//         .where('id', Number(id))
//         .update(scheme);
// }

// function remove(id) {
//     return db('schemes')
//         .where('id', Number(id))
//         .del();
// }
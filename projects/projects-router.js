const express = require('express');

const Projects = require('./projects_model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
});

router.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
});

router.post('/', (req, res) => {
    const project = req.body;

    Projects.addProject(project)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new project' });
        });
});

router.post('/resources', (req, res) => {
    const resource = req.body;

    Projects.addResource(resource)
        .then(thisRes => {
            res.status(200).json(thisRes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource' });
        });
});

router.post('/tasks', (req, res) => {
    const task = req.body;

    Projects.addTask(task)
        .then(thisTask => {
            res.status(200).json(thisTask);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new task' });
        });
});

module.exports = router;
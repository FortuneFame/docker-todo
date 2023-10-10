const express = require('express');
const tasksRouter = express.Router();

const {
    validateTaskIdMiddleware,
    validateTaskNameMiddleware,
    validateTaskUpdateMiddleware
} = require('../middleware');

const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/tasksController');

tasksRouter.use('/api/v1/tasks/:id', validateTaskIdMiddleware);

tasksRouter.get('/api/v1/tasks', getAllTasks);
tasksRouter.get('/api/v1/tasks/:id', getTaskById);
tasksRouter.post('/api/v1/tasks', validateTaskNameMiddleware, createTask);
tasksRouter.patch('/api/v1/tasks/:id', validateTaskUpdateMiddleware, updateTask);
tasksRouter.delete('/api/v1/tasks/:id', deleteTask);

module.exports = tasksRouter;


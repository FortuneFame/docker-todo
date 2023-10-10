const {pool} = require('../db/db');

exports.getAllTasks = async (req, res) => {
    try {
        const [results] = await pool.query(`SELECT * FROM tasks`);
        res.status(200).json({ tasks: results });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const [results] = await pool.query(`SELECT * FROM tasks WHERE id = ?`, [id]);
        if (results.length === 0) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        res.status(200).json({ task: results[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
};

exports.createTask = async (req, res) => {
    try {
        const nameTasks = req.body.name_tasks;
        await pool.query(`INSERT INTO tasks (name_tasks) VALUES (?)`, [nameTasks]);
        res.status(201).json({ Message: 'Created task!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name_tasks, completed } = req.body;
        const [updateResults] = await pool.query(
            `UPDATE tasks SET name_tasks = ?, completed = ? WHERE id = ?`,
            [name_tasks, completed, id]
        );
        if (updateResults.affectedRows === 0) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        const [[updatedTask]] = await pool.query(`SELECT * FROM tasks WHERE id = ?`, [id]);
        res.status(200).json({ task: updatedTask });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const [results] = await pool.query(`DELETE FROM tasks WHERE id = ?`, [id]);
        if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        res.status(200).json({ message: 'Task deleted successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
};

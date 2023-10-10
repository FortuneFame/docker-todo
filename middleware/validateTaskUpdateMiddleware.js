module.exports = (req, res, next) => {
    const { name_tasks, completed } = req.body;
    if (!name_tasks || typeof name_tasks !== 'string') {
        return res.status(400).json({ error: 'Name task is required and should be a string' });
    }
    if (completed === undefined || typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Completed is required and should be a boolean' });
    }
    next();
};

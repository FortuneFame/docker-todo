module.exports = (req, res, next) => {
    const nameTasks = req.body.name_tasks;
    if (!nameTasks || typeof nameTasks !== 'string') {
        return res.status(400).json({ error: 'Name task is required and should be a string' });
    }
    next();
};

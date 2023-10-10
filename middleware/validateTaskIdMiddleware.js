module.exports = (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Task ID must be a number' });
    }
    req.params.id = id;
    next();
};

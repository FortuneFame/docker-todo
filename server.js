const express = require("express");
const path = require('path');
const tasksRouter = require("./routers/tasksRouter");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(tasksRouter);

app.all('*', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, './public/404.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}/`);
});

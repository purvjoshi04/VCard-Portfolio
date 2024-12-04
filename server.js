const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const replicaApp = process.env.APP_NAME
app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
    console.log(`request served by ${replicaApp}`);
});

app.listen(port, () => {
    console.log(`${replicaApp} listening in ${port}`);
});

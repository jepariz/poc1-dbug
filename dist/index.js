import express from "express";
var app = express();
app
    .use(express.json())
    .use("/health", function (req, res) {
    res.send("ok");
});
var port = process.env.PORT || 4000;
app.listen(port, function () { return console.log("Server running in port ".concat(port)); });
export default app;

import express from 'express'
import clientsRouter from "./src/routes/clients.route.js";
import adminRouter from "./src/routes/admin.route.js";
const app = express()


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})
app.use(express.json());

app.use("/clients",clientsRouter);

app.use("/admin",adminRouter)


app.get("/", (req, res) => {
    res.send("Hello World");
})
app.listen(5543, () => {
    console.log("STARTED");
})


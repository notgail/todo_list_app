import express from "express";
import todosRouter from "./route/todos.js";
const app = express();
 
// define the port
const port = 4000;
 
app.use(express.json());
app.use("/api", todosRouter);
 
app.listen(port, () => {
console.log('Server is running on http://localhost:4000');
});
import express from "express";
const app = express();
const todosRouter = express.Router();

todosRouter.get('/todos/:id', (req, res) =>{
    const todoId = req.params.id;
    res.send(`Getting todo with id ${todoId}`);
});
todosRouter.get('/todos', (req,res)=>{

    res.send("GET ALL TODOS")
});
todosRouter.post ('/todos', (req, res)=>{
    res.json({
        id:1,
        title: "Todo",
        description: "My Todo"
    });
});
todosRouter.put('/todos/:id', (req, res)=>{
    const todoId=req.params.id;
    const data = req.body;
    res.send(`Updating TODO with id ${todoId}`);
});
todosRouter.delete('/todos/:id', (req, res)=>{
    const todoId = req.params.id;
    res.send(`Deleting todo with id ${todoId}`);
});
export default todosRouter;
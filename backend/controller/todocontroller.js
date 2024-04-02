const todomodel = require("../models/todomodel.js")

module.exports.getToDos = async (req,res) =>{
    const toDos = await todomodel.find()
    res.send(toDos)
}

module.exports.saveTodo =  (req,res) =>{
    const {toDo} = req.body
    
    todomodel.create({toDo})
    .then((data)=>{
        console.log("Saved Successfully...")
        res.status(201).send(data)
    })
    .catch((err)=> console.log(err))
}

module.exports.updateTodo =  (req,res) =>{
    const {toDo} = req.body
    const {id} = req.params
    todomodel.findByIdAndUpdate(id, {toDo})
    .then(()=>{
        res.send("Updated Successfully..")
    })
    .catch((err)=> console.log(err))
}

module.exports.deleteTodo =  (req,res) =>{
    const {id} = req.params
    todomodel.findByIdAndDelete(id)
    .then(()=>{
        res.send("Deleted Successfully..")
    })
    .catch((err)=> console.log(err))
}
const express = require('express')
const App = express()
App.use(express.json())

const users = [
    {id: 1, name: 'John Doe', age: 30},
    {id: 2, name: 'Jane Doe', age: 28},
    {id: 3, name: 'Alice Doe', age: 25},
    {id: 4, name: 'Bob Doe', age: 32}
]
App.get('/user', (req, res) => {
    res.send({data:users})
})
App.post('/user', (req, res) => {
    users.push({id:users.length,...req.body})
    res.json({message:'Data added successfully'})
})
App.put('/user/:id', (req, res) => {
    let index = users.findIndex(x=>x.id == req.params.id)
    if(index!= -1){
        users[index] = req.body
        res.json({message:'Data updated successfully'})
    }else{
        res.status(404).json ({message:"Data not found."})
    }
})
App.delete('/user/:id', (req, res) => {
    let index = users.findIndex(x=>x.id == req.params.id)
    if(index!= -1){
        users.splice(index, 1)
        res.json({message:'Data deleted successfully'})
    }else{
        res.status(404).json ({message:"Data not found."})
    }
})

App.get('/user/:id', (req, res) => {
    let obj = users.find(x=>x.id == req.params.id)
    if(obj){
        res.json(obj)
    }else{
        res.status(404).send('User not found')
    }
})

App.listen(5000, (err)=>{
    if(err){
        console.log("Server started on port 5000")
    }else{
        console.log("Server started on port 5000")
    }
})
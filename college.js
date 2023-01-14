const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose") 

var college=Express()
college.get("/",(req,res)=>{
    res.send("welcome to my college management application")
})
college.post("/add",(req,res)=>{
    res.send("add college details")
})
college.post("/search",(req,res)=>{
    res.send("search college deatils")
})
college.post("/delete",(req,res)=>{
    res.send("welcome to delete college page")
})
college.post("/edit",(req,res)=>{
    res.send("edit college details")
})
college.get("/viewall",(req,res)=>{
    res.send("welcome to view all college details")
})
college.post("/facultyadd",(req,res)=>{
    res.send("facultyadd college details")
})
college.post("/facultysearch",(req,res)=>{
    res.send("facultysearch college details")
})
college.post("/facultydelete",(req,res)=>{
    res.send("facultydelete college details")
})
college.post("/facultyviewall",(req,res)=>{
    res.send("facultyview all college details")
})
college.listen(3006)
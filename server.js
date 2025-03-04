import express from "express"

const app=express()

app.use(express.json())

const users=[
    {
        username:"deep",
        age:25,
        email:"deep@gmail.com"
    },
    {
        username:"alis",
        age:30,
        email:"ygv@gmail.com"
    }
]
app.post("/createUser",async(req,res)=>{
    try {
        const allusers=new users(req.body)
        await allusers.save()
        res.send("user created");
    } catch (error) {
        res.send("something wrong");
    }
})
app.get("/user",async(req,res)=>{
   try {
    const user=await users.find()
    if(!user)return res.json({message:"User not found"})
    res.json({message:"User found",data:user})
   } catch (error) {
    
   }
})

const PORT=3000
app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
    
})
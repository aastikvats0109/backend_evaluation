const User=require('../models/user');
async function handleUserRegister(req,res){
    if(!req||!req.body){
        return res.status(400).json({error:"GIve details"});
    }
    const {name,email,password}=req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try{
        const result=await User.create({
            name,
            email,
            password
        })
        return res.json({message:"user created successfully"})
    }
    catch(err){
        return res.json({error:err.message});
    }
}
async function handleUserLogin(req,res){
    if(!req||!req.body){
        return res.status(400).json({error:"GIve details"});
    }
    const {email,password}=req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }
    try {
        const user = await User.findOne({ email,password });
        if(!user){
            return res.json({error:"incorrect email or password"});
        }
       return res.json({message:"User logged in successfully"});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
module.exports={handleUserLogin,handleUserRegister};


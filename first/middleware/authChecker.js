const authChecker = (req,res,next)=>{
    console.log("in application level middleware");
    const age = req.query.age;
    if(!age){
        res.send("Please, provide your age.")
    }else{
        if(age < 18){
        res.send('You cannot access this site.')
        }else{
            next()
        }
    }
 }

 module.exports = authChecker;
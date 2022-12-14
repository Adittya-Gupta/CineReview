import User from '../models/user.js';
export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try{
        await newUser.save();
        res.status(201).json(newUser);
    } catch(error){
        res.status(409).json({message: error.message});
    }
}

export const validateUser = async (req, res) =>{
    const cred = req.body;
        User.findOne({'username' : cred.name}, (err, doc)=>{
            if(err) res.send(err);
            else{
                if(doc){
                    if(doc.password === cred.password ) {
                        res.json({data: 'Success', name : doc.name});
                    }
                    else res.json({data: "Wrong password"})
                }
                else{
                    res.json({data: "No such Username exist"})
                }
            }
        })
}
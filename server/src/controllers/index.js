const UserModel = require("../models/user.model");

exports.signup = (req, res) =>{
    const body = req.body;

    //validate payload
    if(body.name === ""|| !body.name ||body.email === ""|| !body.email ){
        res.status(400).send({message: "Either name or email is empty"})
    }

    const user = new UserModel({
        name: body.name,
        email: body.email,
        password: body.password
    });

    user.save()
    .then(data =>{
        res.status(200)
        .send({message: 'new data inserted'})
    })
    .catch(error =>{
        res.status(500).send({error: error.message})
    })

}

exports.login = (req, res) =>{
    const body = req.body;

    //get
    UserModel.findOne({email: body.email, password: body.password})
    .then(data =>{
        if(data === null){

        res.status(404)
        .send({message: "User does not exist"});
        }
        res.status(200)
        .send(data);
    })
    .catch(error =>{
        res.status(500).send({error: error.message})

    })

}
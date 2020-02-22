const router = require('express').Router();
const bcrypt = require('bcryptjs'); 
const Users = require('../users/users-model.js');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets.js'); 

router.post('/register', (req, res) => { 
    let user = req.body;
    console.log('user: ', user)
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    console.log('user with pass:', user)
    Users.add(user)
        .then(user => { 
            console.log('user token and id', user);
            if(user) {
                const token = signToken(user); 
                console.log('token', token)
                res.status(200).json({id:user.id, username:user.username, token: token})
            }else{
                res.status(401).json({SaltiestError:'Password incorrect?'})
            }
        }).catch(error => { 
            console.log('error: ', error)
            res.status(500).json(error);
        })



        // .then(saved => { 
        //     console.log(saved);
        //     res.status(201).json(saved);
        // })
        // .catch(error => { 
        //     console.log('add user error: ', error);
        //     res.status(500).json(error);
        // });
});

router.post('/login', (req, res) => { 
    let {username, password } = req.body;
    Users.findBy({username})
    .then(user => { 
        console.log('user token and id', user);
        if(user && bcrypt.hashSync(password, user.password)) {
            const token = signToken(user); 
            console.log('token', token)
            res.status(200).json({id: user[0].id, username: user[0].username, token: token})
        }else{
            res.status(401).json({SaltiestError:'Password incorrect?'})
        }
    }).catch(error => { 
        console.log('error: ', error)
        res.status(500).json(error);
    })
})

function signToken(user){
    payload = {
        user
    }
    const options = {
        expiresIn : "1d"
    }
    return jwt.sign(payload, jwtSecret, options)
}
module.exports = router;

const express = require('express'); 
const jwt = require('jsonwebtoken'); 
// const authenticate = require('../authenticate-middleware.js');
const router = express.Router();
const Users = require('./users-model');
const bcrypt = require("bcryptjs"); 


router.post("/register", (req, res) => {
    let userData = req.body; 
    const hash = bcrypt.hashSync(userData.password, 10); 
    userData.password = hash;
    console.log('userData', userData);
    Users.add(userData)
      .then(user => {
          console.log('/register user', user)
          const token = signToken(user);
          res.status(200).json({id: user.id}); 

      })
      .catch(error => { 
          res.status(500).json({ errorMessage: error }); 
      });
});

router.post("/login", (req, res) => { 
    const { username, password} = req.body; 
    
    Users.findBy({username})
    .then(user => {
        console.log('/login user', user); 
        if(user && bcrypt.compareSync(password, user.password)){
            const token = signToken(user);
            res.status(200).json({
                username: user.username, 
                SuccessMessage: `${user.username} Logged In!`,
                token, 
                id: user.id
            });
        } else {
            res.status(401).json({ message: "Failed to login"});
        }
    })
    .catch(error => { 
        console.log(error); 
        res.status(500).json({errorMessage: " Failed to retrieve credentials " + error})
    });
});

function signToken(user){ 
    const payload = { 
        username: user.username
        //not sure if password goes here password: user.password
    }
    const secret = process.env.JWT_SECRET || "secret code"; 
    const options = { 
        expiresIn: "8h"
    }
    return jwt.sign(payload, secret, options); 
}

router.get('/list', (req, res) => { 
    Users.find()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/users get error: ', err)
        res.status(500).json({errorMessage: 'could not get users', err: err})
    })
})

router.post('/:id/orders', (req, res) => { 
    Users.addOrders(req.body, req.params.id)
    .then(users => { 
        res.status(201).json(users)
    })
    .catch(err => { 
        console.log('/users get error: ', err)
        res.status(500).json({errorMessage: 'could not post messages', err: err})
    })
})


module.exports = router; 
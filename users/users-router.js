const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware.js')



router.get('/', restricted,  (req, res) => { 
    Users.find()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/users get error: ', err)
        res.status(500).json({errorMessage: 'could not get users', err: err})
    })
})
router.post('/', restricted, (req, res) => { 
    Users.find()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/users get error: ', err)
        res.status(500).json({errorMessage: 'could not get users', err: err})
    })
})
router.get('/favorites', (req, res) => { 
    Users.findFavorites()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/users get error: ', err)
        res.status(500).json({errorMessage: 'could not get users', err: err})
    })
})
router.post('/:id/favorites/', (req, res) => { 
    // const id = req.params.id;
    Users.addFav(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/favorites err:', err)
        
            res.status(500).json({errorMessage:'could not get favorites', error: err})
       
    })
})
//--------------profile------------- addProfile
router.get('/profile', (req, res) => { 
    Users.findProfile()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/users get error: ', err)
        res.status(500).json({errorMessage: 'could not get users', err: err})
    })
})
router.post('/:id/profile', (req, res) => { 
    // const id = req.params.id;
    Users.addProfile(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/profile err:', err)
        
            res.status(500).json({errorMessage:'could not post profile', error: err})
       
    })
})

//--------------comment--------------
router.get('/comment', (req, res) => { 
    Users.findComment()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/users get error: ', err)
        res.status(500).json({errorMessage: 'could not get comment', err: err})
    })
})
router.post('/:id/comment', (req, res) => { 
    // const id = req.params.id;
    Users.addComment(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/profile err:', err)
        
            res.status(500).json({errorMessage:'could not post comment', error: err})
       
    })
})


//------------------Watched-------------

router.get('/watched', (req, res) => { 
    Users.findWatched()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/watched get error: ', err)
        res.status(500).json({errorMessage: 'could not get watched', err: err})
    })
})
router.post('/:id/watched', (req, res) => { 
    // const id = req.params.id;
    Users.addWatched(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/profile err:', err)
        
            res.status(500).json({errorMessage:'could not post comment', error: err})
       
    })
})


//------------------Ratings-------------

router.get('/ratings', (req, res) => { 
    Users.findRatings()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/ratings get error: ', err)
        res.status(500).json({errorMessage: 'could not get comment', err: err})
    })
})
router.post('/:id/ratings', (req, res) => { 
    // const id = req.params.id;
    Users.addRatings(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/ratings err:', err)
        
            res.status(500).json({errorMessage:'could not post rating', error: err})
       
    })
})

//------------------Diary-------------

router.get('/diary', (req, res) => { 
    Users.findDiary()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/diary get error: ', err)
        res.status(500).json({errorMessage: 'could not get comment', err: err})
    })
})
router.post('/:id/diary', (req, res) => { 
    // const id = req.params.id;
    Users.addDiary(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/diary err:', err)
        
            res.status(500).json({errorMessage:'could not post diary', error: err})
       
    })
})

//------------------Diary-------------

router.get('/reviews', (req, res) => { 
    Users.findReviews()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/reviews get error: ', err)
        res.status(500).json({errorMessage: 'could not get comment', err: err})
    })
})
router.post('/:id/reviews', (req, res) => { 
    // const id = req.params.id;
    Users.addReviews(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/reviews err:', err)
        
            res.status(500).json({errorMessage:'could not post review', error: err})
       
    })
})

//------------------Watch List-------------

router.get('/watchlist', (req, res) => { 
    Users.findWatchList()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/watchlist get error: ', err)
        res.status(500).json({errorMessage: 'could not get comment', err: err})
    })
})
router.post('/:id/watchlist', (req, res) => { 
    // const id = req.params.id;
    Users.addWatchList(req.body, req.params.id)
    .then(fav => { 
        res.status(200).json(fav)
    })
    .catch(err => { 
        console.log('/watchlist err:', err)
        
            res.status(500).json({errorMessage:'could not post watchlist', error: err})
       
    })
})

//-----------------getalldata-------------
router.get('/getalldata', (req, res) => { 
    Users.getalldata()
    .then(users => { 
        res.status(200).json(users)
    })
    .catch(err => { 
        console.log('/getalldata get error: ', err)
        res.status(500).json({errorMessage: 'could not get all data', err: err})
    })
})

router.post('/upload', (req, res) => { 
    console.log(req.files.movies)
    // console.log(req.file.Name)
    // console.log(req.file.size)
    if(req.files.movies.name){
        res.status(200).json({message: 'successfull file upload'})
    }else{
        res.status(500).json({error:'error console logging file.'})
    }
})
module.exports = router;
const db = require('../database/dbConfig.js');
module.exports = {
    find, 
    add, 
    findBy, 
    findById,
    findFavorites,
    addFav,
    
    addProfile,
    findUserProfId,
    findProfile, 

    findUserComId,
    addComment, 
    findComment,

    findUserWatchedId,
    addWatched, 
    findWatched,

    findUserRatingsId,
    findRatings, 
    addRatings,

    findUserDiaryId,
    findDiary, 
    addDiary,

    findUserReviewsId,
    addReviews, 
    findReviews,

    findUserWLId,
    findWatchList, 
    addWatchList,

    getalldata

}
async function add(user){
    const [id] = await db('users').insert(user).returning('id');
    return findById(id);
}
function findById(id){
    return db('users')
    .where({id})
    .first();
}
function findBy(input){
    return db('users').where(input); 
}
function find(){
    return db('users').select('id', 'username');
}

function findFavorites(){
    return db('Favorites').select('id', 'image', 'title', 'description', 'starRating', 'user_id')
}

async function addFav(input, userid){
    const [id] = await db('Favorites').insert(input).returning('id');
    return findUserFavId(id, userid)
    
}
async function findUserFavId(id, userid){
    console.log('favoritesId and userId', id, userid)
    let project = await db('Favorites as F')
    .join('users as U' , 'U.id', 'F.user_id')
    .select('F.user_id', 'U.username').where('F.user_id', Number(userid) )
    .select('F.id as favorite_id', 'F.image','F.title', 'F.description', 'F.starRating').where('F.id', id)
    return project  
}

//---------------------profile-----------------

function findProfile(){
    return db('profile').select('id', 'Date Joined', 'Username', 'Given Name', 'Family Name', 'Email', 'user_id')
}
async function addProfile(input, userid){
    const [id] = await db('profile').insert(input).returning('id');
    return findUserProfId(id, userid)
    
}
async function findUserProfId(id, userid){
    console.log('favoritesId and userId', id, userid)
    let project = await db('profile as P')
    .join('users as U' , 'U.id', 'P.user_id')
    .select('P.user_id', 'U.username').where('P.user_id', Number(userid) )
    .select('P.id as profile_id', 'P.Date Joined','P.Username', 'P.Given Name', 'P.Family Name', 'P.Email','P.Address', 'P.Location', 'P.Website', 'P.Bio', 'P.Pronoun', 'P.Favorite Films').where('P.id', id)
    return project  
}


//----------------comments----------
function findComment(){
    return db('comments').select('id', 'Date', 'Content', 'Comment','user_id')
}
async function addComment(input, userid){
    const [id] = await db('comments').insert(input).returning('id');
    return findUserComId(id, userid)
    
}
async function findUserComId(id, userid){
    console.log('CommentId and userId', id, userid)
    let project = await db('comments as C')
    .join('users as U' , 'U.id', 'C.user_id')
    .select('C.user_id', 'U.username').where('C.user_id', Number(userid) )
    .select('C.id as comment_id', 'C.Date', 'C.Content', 'C.Comment').where('C.id', id)
    return project  
}


//----------------watched----------------

function findWatched(){
    return db('watched').select('id', 'Date', 'Name', 'Year', 'Letterboxd URI','user_id')
}
async function addWatched(input, userid){
    const [id] = await db('watched').insert(input).returning('id');
    return findUserWatchedId(id, userid)
    
}
async function findUserWatchedId(id, userid){
    console.log('WatchedId and userId', id, userid)
    let project = await db('watched as W')
    .join('users as U' , 'U.id', 'W.user_id')
    .select('W.user_id', 'U.username').where('W.user_id', Number(userid) )
    .select('W.id as watched_id', 'W.Date', 'W.Name', 'W.Year','W.Letterboxd URI').where('W.id', id)
    return project  
}

//----------------ratings----------------

function findRatings(){
    return db('ratings').select('id', 'Date', 'Name', 'Year','Letterboxd URI','Rating', 'user_id')
}
async function addRatings(input, userid){
    const [id] = await db('ratings').insert(input).returning('id');
    return findUserRatingsId(id, userid)
    
}
async function findUserRatingsId(id, userid){
    console.log('RatingsId and userId', id, userid)
    let project = await db('ratings as R')
    .join('users as U' , 'U.id', 'R.user_id')
    .select('R.user_id', 'U.username').where('R.user_id', Number(userid) )
    .select('R.id as ratings_id', 'R.Date', 'R.Name', 'R.Year','R.Letterboxd URI', 'R.Rating').where('R.id', id)
    return project  
}

//----------------diary----------------

function findDiary(){
    return db('diary').select('id', 'Date', 'Name', 'Year','Letterboxd URI','Rating','Rewatch', 'Tags', 'Watched Date', 'user_id')
}
async function addDiary(input, userid){
    const [id] = await db('diary').insert(input).returning('id');
    return findUserDiaryId(id, userid)
    
}
async function findUserDiaryId(id, userid){
    console.log('DiaryId and userId', id, userid)
    let project = await db('diary as D')
    .join('users as U' , 'U.id', 'D.user_id')
    .select('D.user_id', 'U.username').where('D.user_id', Number(userid) )
    .select('D.id as diary_id', 'D.Date', 'D.Name', 'D.Year','D.Letterboxd URI', 'D.Rating','D.Rewatch', 'D.Tags', 'D.Watched Date').where('D.id', id)
    return project  
}

//----------------Reviews----------------

function findReviews(){
    return db('reviews').select('id', 'Date', 'Name', 'Year','Letterboxd URI','Rating','Rewatch', 'Review', 'Tags','Watched Date', 'user_id')
}
async function addReviews(input, userid){
    const [id] = await db('reviews').insert(input).returning('id');
    return findUserReviewsId(id, userid)
    
}
async function findUserReviewsId(id, userid){
    console.log('ReviewsId and userId', id, userid)
    let project = await db('reviews as RD')
    .join('users as U' , 'U.id', 'RD.user_id')
    .select('RD.user_id', 'U.username').where('RD.user_id', Number(userid) )
    .select('RD.id as reviews_id', 'RD.Date', 'RD.Name', 'RD.Year','RD.Letterboxd URI', 'RD.Rating','RD.Rewatch','RD.Review',  'RD.Tags', 'RD.Watched Date').where('RD.id', id)
    return project  
}

//----------------Watch List----------------

function findWatchList(){
    return db('watchlist').select('id', 'Date', 'Name', 'Year','Letterboxd URI', 'user_id')
}
async function addWatchList(input, userid){
    const [id] = await db('watchlist').insert(input).returning('id');
    return findUserWLId(id, userid)
    
}
async function findUserWLId(id, userid){
    console.log('WatchListID and userId', id, userid)
    let project = await db('watchlist as WL')
    .join('users as U' , 'U.id', 'WL.user_id')
    .select('WL.user_id', 'U.username').where('WL.user_id', Number(userid) )
    .select('WL.id as watchlist_id', 'WL.Date', 'WL.Name', 'WL.Year','WL.Letterboxd URI').where('WL.id', id)
    return project  
}

async function getalldata(){
    // let allUserData = await db('users as U')
    let allUserData;
    let WatchList = [];
    const profile = async(allUserData) => {
       
        allUserData = await db('users as U')
        .join('profile as P', 'U.id', 'P.user_id')
        .select('P.user_id', 'U.username')
        .select('P.id as profile_id', 'P.Date Joined','P.Username', 'P.Given Name', 'P.Family Name', 'P.Email','P.Address', 'P.Location', 'P.Website', 'P.Bio', 'P.Pronoun', 'P.Favorite Films').then(function(movie) { 
            WatchList.push({profile: movie})
            return WatchList;
        })
        return allUserData
            
    }

    const comment = async(allUserData) => { 
       
        allUserData = await db('users as U')
        .join('comments as C', 'U.id', 'C.user_id')
        .select('C.user_id', 'U.username')
        .select('C.id as comment_id', 'C.Date', 'C.Content', 'C.Comment').then(function(movie) { 
            WatchList.push({comment: movie})
            return WatchList;
        })
        
    }

    const watched = async(allUserData) => {
        
        allUserData = await db('users as U')
        .join('watched as W' , 'U.id', 'W.user_id')
        .select('W.user_id', 'U.username')
        .select('W.id as watched_id', 'W.Date', 'W.Name', 'W.Year','W.Letterboxd URI').then(function(movie) { 
            WatchList.push({watched: movie})
            return WatchList;
        })
           return allUserData 
    }

    const ratings = async(allUserData) => {
       
        allUserData = await db('users as U')
        .join('ratings as R' , 'U.id', 'R.user_id')
        .select('R.user_id', 'U.username')
        .select('R.id as ratings_id', 'R.Date', 'R.Name', 'R.Year','R.Letterboxd URI', 'R.Rating').then(function(movie) { 
            WatchList.push({ratings: movie})
            return WatchList;
        })
        return allUserData
    }

    const diary = async(allUserData) => { 
       
        allUserData = await db('users as U')
        .join('diary as D' , 'U.id', 'D.user_id')
        .select('D.user_id', 'U.username')
        .select('D.id as diary_id', 'D.Date', 'D.Name', 'D.Year','D.Letterboxd URI', 'D.Rating','D.Rewatch', 'D.Tags', 'D.Watched Date').then(function(movie) { 
            WatchList.push({diary: movie})
            return WatchList;
        })
        return allUserData
    }

    const reviews = async(allUserData) => {
        
        allUserData = await db('users as U')
        .join('reviews as RD' , 'U.id', 'RD.user_id')
        .select('RD.user_id', 'U.username')
        .select('RD.id as reviews_id', 'RD.Date', 'RD.Name', 'RD.Year','RD.Letterboxd URI', 'RD.Rating','RD.Rewatch','RD.Review',  'RD.Tags', 'RD.Watched Date').then(function(movie) { 
            WatchList.push({reviews: movie})
            return WatchList;
        })
        return allUserData
    }
  
    const watchlist = async(allUserData) => { 
        
        allUserData = await db('users as U')
        .join('watchlist as WL' , 'U.id', 'WL.user_id')
        .select('WL.user_id', 'U.username')
        .select('WL.id as watchlist_id', 'WL.Date', 'WL.Name', 'WL.Year','WL.Letterboxd URI').then(function(movie) { 
            WatchList.push({watchlist: movie})
            return WatchList;
            
        })
            return allUserData
        
    }
    allUserData = await profile(allUserData)
    allUserData = await comment(allUserData)
    allUserData = await watched(allUserData)
    allUserData = await ratings(allUserData)
    allUserData = await diary(allUserData)
    allUserData= await reviews(allUserData)
    allUserData = await watchlist(allUserData)

    return allUserData;
    
    
}
const express  = require('express');
const Post = require('../Models/Post')
const router = express.Router();


router.get("/", (req, res) => {
  res.send("Post Only");
});
// ***********************************************//
// grabing the post by catorgory 
// ***********************************************//

// ***********************************************//
// Most recent posty created 
// ***********************************************//

// ***********************************************//
// view of all catorgoies 
// ***********************************************//


// ***********************************************//
// Create a Post
// ***********************************************//
router.post('/',(req , res) => {
// this issue is happening here
  const post = new Post({
    title:req.body.title,
    description:req.body.description,
    category:req.body.category
  });

  post.save()

.then(data =>{
  res.json(data)
})
.catch(err => {
  res.json({ message: err})
})
console.log(req.body)

})

router.get("/specific", (req, res) => {
  res.send("specific post");

});

// ***********************************************//
// Create a edit a post 
// ***********************************************//


// ***********************************************//
// Create a delete a post 
// ***********************************************//





module.exports = router
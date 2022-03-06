const express  = require('express');
const Post = require('../Models/Post')
const router = express.Router();


router.get("/", (req, res) => {
  res.send("Post Only");
});

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



module.exports = router
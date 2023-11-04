import Post from "../models/post.model.js";

export const createPost = async (req, res)=>{
    try{
        const token = req.cookies.accessToken;
        if(!token) return res.status(401).send('Not logged in');
        const newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            image: req.body.image,
        })
        await newPost.save();
        // res.status(201).send('Post has been created')
        res.status(201).json({
            status: true,
            message: 'Post has been created',
            post: newPost,
          });
    }catch(err){
        res.status(500).send('Something went wrong')
    }
}

export const deletePost = async (req, res)=>{
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).send('Not logged in');
    await Post.findByIdAndDelete(req.params.id)
    res.status(201).send('deleted')
}
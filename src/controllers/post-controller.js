
const listPosts = (req, res) => {
    res.json([{ title: "First post", imagenUrl: "",}]);
}

const getPost = (req, res) => {
    res.json({ title: "Single post", imagenUrl: "",});
}

const savePost = (req, res) => {
    const newPost = req.body;
    console.log(req.body);
    res.status(201).json(newPost);
}

const updatePost = (req, res) => {
    const {id}  = req.params;
    const post = req.body;
    res.json({id, ...post});
}

const deletePost = (req, res) => {
    const {id}  = req.params;
    console.log("Delete post with ID: ", id);
    res.status(204).json();
}

module.exports = {
    listPosts,
    getPost,
    savePost,
    updatePost,
    deletePost,
}
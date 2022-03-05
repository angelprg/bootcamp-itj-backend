const saveComment = (req, res) => {
    const { id } = req.params;
    console.log("Add comment to post ", id);
    const newComment = req.body;
    res.status(201).json(newComment);
}

module.exports = {
    saveComment
}
const Service = require('./service');

const Controller = {
  getPosts(req, res, next) {
    return Service.list()
      .then((posts) => {
        return res.status(201).json(posts);
      })
      .catch((error) => {
        return next(error);
      });
  },

  getPost(req, res, next) {
    const postId = req.params.postId;
    return Service.get(postId)
      .then((post) => {
        return res.json(post);
      })
      .catch((error) => {
        return next(error);
      });
  }
};

module.exports = Controller;

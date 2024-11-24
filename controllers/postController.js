const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.render('posts', { title: 'Усі пости', posts });
};

exports.addPostPage = (req, res) => {
  res.render('add-post', { title: 'Додати новий пост' });
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/posts');
};

exports.editPostPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('edit-post', { title: 'Редагувати пост', post });
};

exports.updatePost = async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/posts');
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect('/posts');
};


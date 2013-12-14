// this adds the posts helpers to the meteor helpers
Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});
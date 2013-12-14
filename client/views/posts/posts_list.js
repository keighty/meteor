var postsData = [
  {
    title: 'Introducing Telescope',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
  },
  {
    title: 'A Whole New World',
    author: 'Me',
    url: '#'
  },
  {
    title: 'FooBar and the foobars',
    author: 'Me',
    url: '#'
  }
];
Template.postsList.helpers({
  posts: postsData
});
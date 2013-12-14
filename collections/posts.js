// not using var allows the Posts collection 
// to be available to the whole app
// the var keyword would scope it to the current file
Posts = new Meteor.Collection('posts');
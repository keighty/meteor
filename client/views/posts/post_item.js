// the domainName function returns text, and is called by the template
Template.postItem.helpers({
  domainName: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});
##Discover meteor

Using free.discovermeteor.com to explore a new framework.

To access a "console"
```
✗ meteor mongo
MongoDB shell version: 2.4.6
connecting to: 127.0.0.1:5680/meteor
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
  http://docs.mongodb.org/
Questions? Try the support group
  http://groups.google.com/group/mongodb-user
> db.posts.insert({title: "A new one!"});
> db.posts.find();
{ "_id" : ObjectId("52aca8161e6f4c5078157e55"), "title" : "A new one!" }
> ^C
bye
```

get to deployed app's logs:
```
$ meteor logs myApp
```
const express = require('express');
const {MongoClient} = require('mongodb');
const debug = require('debug')('app:adminRoutes');
const adminRouter = express.Router();
const books = [
  {
    title: 'Life of Pi',
    genre: 'Action and Adventure',
    author: 'Yann Martel',
    read: false
  },
  {
    title: 'Little Women',
    genre: 'Classics',
    author: 'Louisa May Alcot',
    read: false
  },
  {
    title: 'Watchmen',
    genre: 'Comic book',
    author: 'Alan Moore',
    read: false
  },
  {
    title: 'The Help',
    genre: 'Historical Fiction',
    author: 'Kathryn Stockett',
    read: false
  },
  {
    title: 'Bird Box',
    genre: 'Horror',
    author: 'Henry Kuttner',
    read: false
  },
  ];
function router(nav) {
  adminRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:2701';
      const dbName = 'LibraryApp';
      (async function mongo(){
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected correctly to server');

          const db = client.db(dbName);

          const response = await db.collection('books').insertMany(books);
          res.json(response);
        } catch (err) {
          debug(err.stack);
        }
        client.close();
      }());
      res.send('inserting books');
    });
  return adminRouter;
}

module.exports = router;

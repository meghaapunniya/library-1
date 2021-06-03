const express = require('express');
const bookRouter = express.Router();

function router(nav) {
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
  bookRouter.route('/')
    .get((req, res) => {
      res.render(
        'bookListView',
        {
          nav,
          title: 'Library',
          books
        }
      );
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render(
        'bookView',
        {
          nav,
          title: 'Library',
          book: books[id]
        }
      );
    });
  return bookRouter;
}


module.exports = router;

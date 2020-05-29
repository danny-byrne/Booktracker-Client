import React from 'react';

const myBooks = [
  {
    title: 'The Book of the Law',
    author: 'Aleister Crawley',
    pages: 300,
    pagesCompleted: 299,
    completed: false
  },
  {
    title: 'Tiamat\'s Wrath',
    author: 'James C Corey',
    pages: 450,
    pagesCompleted: 0,
    completed: false
  },
  {
    title: 'Singing to the Plants',
    author: '',
    pages: 500,
    pagesCompleted: 200,
    completed: false
  }
]

const Book = props => {
  const { title, author, pagesCompleted, pages, completed } = props.book;
  return (
    <div>
      <h3>Title: {title}</h3>
      <h3>Author: {author}</h3>
      <h3>Progress: {pagesCompleted} of {pages}</h3>
      <h3>Completed: {completed}</h3>
    </div>
  )
}

const BookList = props => {
  return (
    myBooks.map((e) => 
      <Book book={e} />
    )
  )
}

export default BookList;
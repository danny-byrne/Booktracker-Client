/**
 * ***********************
 * 
 * @module MainContainer
 * @author
 * @date 
 * @description
 * 
 * ***********************
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import BookList from '../components/BookList';



const mapStateToProps = store => ({
  books: store.books,
  title: store.book.title,
  author: store.book.author,
  pages: store.book.pages,
  pagesCompleted: store.book.pagesCompleted,
  completed: store.book.completed
})

const mapDispatchToProps = dispatch => ({
  addBook: (event) => { 
    dispatch(actions.addBook())
  },
  editBook: (event) => {
    dispatch(actions.editBook(event.target.value))
  },
  completeBook: (event) => {
    dispatch(actions.completeBook(event))
  },
  clearBook: (event) => {
    dispatch(actions.clearBook(event))
  }
})


class MainContainer extends Component {
  render(){
    return(
      <BookList />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
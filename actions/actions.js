import * as types from '../constants/actionTypes'

export const loadBooks = event => ({ type: types.LOAD_BOOKS, event })
export const addBook = event => ({ type: types.ADD_BOOK, event })
export const setBOok = text => ({ type: types.SET_BOOK, text })
export const editBook = (id, text) => ( {type: types.SET_BOOK, id, text })
export const completeBook = id => ({ type: types.COMPLETE_BOOK, id })
export const clearBook = id => ({ type: types.CLEAR_BOOK, id })

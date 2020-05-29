import {
  LOAD_BOOKS, 
  ADD_BOOK,
  SET_BOOK,
  EDIT_BOOK,
  COMPLETE_BOOK,
  CLEAR_BOOK
} from '../constants/ActionTypes';


const initialState = {
  books: [],
  book: {
    title: '',
    author: '',
    pages: 0,
    pagesCompleted: 0,
    completed: false
  }
}


function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_BOOK:
      return [

      ]

    case ADD_BOOK:
      return [

      ]

    case EDIT_BOOK:
        return [

        ]

    case COMPLETE_BOOK:
        return [

        ]

    case CLEAR_BOOK: 
        return [

        ]

    default: 
      return state
  }
}

export default reducer;




import { ADD_BOOK, REMOVE_BOOK, SEARCH_BOOKS } from "./actions"

// TODO: import actions and implement reducer for each action
export default function reducer(prevState, data) {
  let {bookSearchResults, favoriteBooks} = prevState
  switch(data.action) {
    case ADD_BOOK:
      favoriteBooks = [...favoriteBooks, data.payload]
      saveToLocalStorage(favoriteBooks)
      return {...prevState, favoriteBooks}
    case REMOVE_BOOK:
      favoriteBooks = favoriteBooks.filter(book => book.id !== data.payload)
      saveToLocalStorage(favoriteBooks)
      return {...prevState, favoriteBooks}
    case SEARCH_BOOKS:
      return {...prevState, bookSearchResults: data.payload};
    default:
      return prevState
}}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}


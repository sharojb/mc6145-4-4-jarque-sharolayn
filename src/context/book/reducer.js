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

/*Map => loops over an array, performs the function on every element, return the result into a new array
filter => returns a new array containing all the elements of initial array that pass a comparison
forEach => pure loop
reduce => I still don't really understand this one
findIndex => similar to filter, but returns the index of the first element in the array that matches the comparison

array.forEach(element => {
  element * 2
});
for (let i= 0; ...) {
  arr[i] * 2
}*/
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUESTED',
    };
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const bookRemovedFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    }
}

const AllBooksRemovedFromCart = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookId
    }
}

const fetchBooks = (dispatch, bookStoreService) => () => {
    dispatch(booksRequested());
    bookStoreService.getBooks()
        .then((data) => {
            dispatch(booksLoaded(data))
        })
        .catch((err) => {
            dispatch(booksError(err))
        });
}

export {
    fetchBooks,
    bookAddedToCart,
    bookRemovedFromCart,
    AllBooksRemovedFromCart
};
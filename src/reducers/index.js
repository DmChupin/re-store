const initialState = {
  books: [
      {
          id:1,
          tittle:'Book 1 Prod',
          author:'Book 1 author'
      },
      {
          id:2,
          tittle:'Book 2 Prod',
          author:'Book 3 author'
      },
      {
          id:3,
          tittle:'Book 3 Prod',
          author:'Book 3 author'
      },
  ]
};
const reducer = (state = initialState, action) => {

    switch (action) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
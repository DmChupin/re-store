import React from "react";
import './book-list-item.css';

const BookListItem = ({book}) => {
    const {tittle, author} = book;
    return (
        <>
            <span>{tittle}</span>
            <span>{author}</span>
        </>
    );
}
export default BookListItem;
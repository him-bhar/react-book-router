import React, {useContext} from "react";
import {BooksContext} from "../BooksContext.jsx";
import {useParams} from "react-router-dom";

const BookDetails = () => {
    const paramVars = useParams();
    const bookId = paramVars.bookId;
    const booksCtxObj = useContext(BooksContext);

    const book = booksCtxObj.books.find((b) => b.id === parseInt(bookId));
    if (booksCtxObj.books.length === 0) {
        return (
            <div>Loading...</div>
        )
    }
    if (book == null) {
        return (
            <div>Book not found</div>
        );
    }
    return(
        <div>
            <h1>{book.title}</h1>
            <h2>by {book.author}</h2>
            <p>by {book.description}</p>
        </div>
    );
}

export default BookDetails;
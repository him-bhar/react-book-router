import React, {useContext, useEffect} from "react";
import {BooksContext} from "../BooksContext.jsx";
import { useLocation} from "react-router-dom"; //This gives us access to request url

const Books = () => {
    const query = new URLSearchParams(useLocation().search); //This is how we get access to query url
    const search = query.get("search") || ''; //Param name in the query url , if not available then return blank see || operator

    const booksCtxObj = useContext(BooksContext);

    const filteredBooks = booksCtxObj.books.filter(
        b => b.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <h1>All Books</h1>
            <ul>
                {
                    filteredBooks.map(book => (
                        <li key={book.id}>
                            {book.title} by {book.author}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Books;
import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {createContext} from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/books.json")
            .then(res => res.json())
            .then(books => setBooks(books))
            .catch(err => console.log(err));
    }, [])

    return (
        <BooksContext.Provider value={{ books, setBooks }}>
            {children}
        </BooksContext.Provider>
    );
}
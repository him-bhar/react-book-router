import './App.css'
import {BooksProvider} from "./BooksContext.jsx";
import Books from "./components/Books.jsx";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import BookDetails from "./components/BookDetails.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {

    return (
        <BooksProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Books />} />
                    <Route path="/books" element={<Navigate to="/" /> } />
                    <Route path="/books/:bookId" element={<BookDetails /> } />

                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </Router>
        </BooksProvider>
    )
}
//Navigate is used to setup redirections,
// so basically what will happen is when we try to access url /books , we will be redirected to url /

//3rd Route, get book by bookId, see the last uri, that's a dynamic paramter, :bookId, and same is leveraged in BookDetails.jsx,
//const bookId = useParams(); it's a match by name

//4th Route, * route is like a catch all condition, if none of route matched, then this route will trigger, which can point to a not found page
export default App

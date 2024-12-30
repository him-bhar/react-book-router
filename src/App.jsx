import './App.css'
import {BooksProvider} from "./BooksContext.jsx";
import Books from "./components/Books.jsx";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {

    return (
        <BooksProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Books />} />
                    <Route path="/books" element={<Navigate to="/" /> } />
                </Routes>
            </Router>
        </BooksProvider>
    )
}
//Navigate is used to setup redirections,
// so basically what will happen is when we try to access url /books , we will be redirected to url /
export default App

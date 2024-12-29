import './App.css'
import {BooksProvider} from "./BooksContext.jsx";
import Books from "./components/Books.jsx";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {

    return (
        <BooksProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Books />} />
                </Routes>
            </Router>
        </BooksProvider>
    )
}

export default App

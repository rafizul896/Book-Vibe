import { useEffect, useState } from "react";
import ReadBook from "./ReadBook";
import { getReadBooks } from "../utilits";

const ReadBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = getReadBooks();
        setBooks(storedReadBooks);
    }, [])
    
    return (
        <div className="flex flex-col gap-5 mt-5">
            {
                books.map((book) => <ReadBook key={book.bookId} book={book}></ReadBook>)
            }
        </div>
    );
};

export default ReadBooks;
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getReadBooks } from "../utilits";
import Shorted from "../components/Shorted";
import ReadBook from "../components/ReadBook";


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [books, setBooks] = useState([]);
    const [sortedData,setSortedData] = useState(getReadBooks)

    useEffect(() => {
        const storedReadBooks = getReadBooks();
        setBooks(storedReadBooks);
    }, [])
    const handleBooksFilter = (filter) => {
        if (filter == 'rating') {
            const sortedRating = books.sort((b1, b2) => b1.rating - b2.rating)
            setSortedData(sortedRating)
        }
        else if (filter === 'pages') {
            const sortedPages = books.sort((b1, b2) => b1.totalPages - b2.totalPages)
            setSortedData(sortedPages)
        }
        else if (filter === 'year') {
            const sortedYear = books.sort((b1, b2) => b1.yearOfPublishing - b2.yearOfPublishing)
            setSortedData(sortedYear)
        }
    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-center bg-[#1313130D] py-5">Books</h1>
            <div className="flex justify-center mt-3">
                <details className="dropdown">
                    <summary className="m-1 p-3 rounded-lg bg-[#23BE0A] text-white">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleBooksFilter('rating')}><a>Rating</a></li>
                        <li onClick={() => handleBooksFilter('pages')}><a>Number of Pages</a></li>
                        <li onClick={() => handleBooksFilter('year')}><a>Published Year</a></li>
                    </ul>
                </details>
            </div>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap mt-5">
                <Link to='readbooks' onClick={() => setTabIndex(0)} className={`${tabIndex === 0 ? "border-b-0 border" : "border-b"} rounded-t-lg flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-600`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link to='wishlistbooks' onClick={() => setTabIndex(1)} className={`${tabIndex === 1 ? "border border-b-0" : "border-b"} flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <Outlet></Outlet>
            <div className="flex flex-col gap-5 mt-5">
                
                {/* {
                    sortedData.map((book,idx) => <ReadBook key={idx} book={book}></ReadBook>)
                } */}
            </div>
        </div>
    );
};

export default ListedBooks;
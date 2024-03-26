import { useEffect, useState } from "react";
import { getReadBooks, readBooks } from "../utilits";
import { Link } from "react-router-dom";

const ListedBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const storedReadBooks = getReadBooks();
        setBooks(storedReadBooks);
    }, [])
    return (
        <div>
            <h1 className="text-2xl font-bold text-center bg-[#1313130D] py-5">Books</h1>
            <div className="flex justify-center mt-3">
                <details className="dropdown">
                    <summary className="m-1 p-3 rounded-lg bg-[#23BE0A] text-white">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>
            {/* <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link to='content' onClick={() => setTabIndex(0)} className={`${tabIndex === 0 ? "border-b-0 border" : "border-b"} rounded-t-lg flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-600`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Content</span>
                </Link>
                <Link to='author' onClick={() => setTabIndex(1)} className={`${tabIndex === 1 ? "border border-b-0" : "border-b"} flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Author</span>
                </Link>
            </div>
            <Outlet></Outlet> */}
        </div>
    );
};

export default ListedBooks;
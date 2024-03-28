import { useEffect, useState } from "react";
import { getWishBooks } from "../utilits";
import WishBook from "./WishBook";

const WishlistBooks = () => {
    const [wishBooks, setWishBooks] = useState([]);
    
    useEffect(() => {
        const storedWishBooks = getWishBooks();
        setWishBooks(storedWishBooks)
    }, [])
    return (
        <div className="flex flex-col gap-5 mt-5">
            {
                wishBooks.map(wishBook => <WishBook key={wishBook.bookId} wishBook={wishBook}></WishBook>)
            }
        </div>
    );
};

export default WishlistBooks;
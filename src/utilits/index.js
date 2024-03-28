import { toast } from "react-toastify";

const getReadBooks = () => {
    let readBooks = []
    const storedReadBook = localStorage.getItem('books');
    if (storedReadBook) {
        readBooks = JSON.parse(storedReadBook);
    }
    return readBooks;
}
const getWishBooks = () => {
    let readBooks = []
    const storedReadBook = localStorage.getItem('wishBooks');
    if (storedReadBook) {
        readBooks = JSON.parse(storedReadBook);
    }
    return readBooks;
}
// read-save-books
const readBooks = book => {
    let books = getReadBooks();
    const isExist = books.find(b => b.bookId === book.bookId);
    if (isExist) {
        return toast.error('You Have Already Read this Books')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Books Added to Read List')
}

// wishlist books
const wishListBooks = book => {
    let books = getWishBooks();
    const isExist = books.find(b => b.bookId === book.bookId);
    if (isExist) {
        return toast.error('Already added!')
    }
    else {
        const readBooks = getReadBooks();
        console.log(readBooks)
        const isAgain = readBooks.find(b => b.bookId === book.bookId)
        if (isAgain) {
        return toast.error('You have Already Read this Book')
        }
        books.push(book)
        localStorage.setItem('wishBooks', JSON.stringify(books))
        toast.success("Books Added to WishList")
    }
}

export { getReadBooks, readBooks, wishListBooks, getWishBooks }
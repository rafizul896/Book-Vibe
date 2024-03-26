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
        return toast.error('Already read')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Successfully!')
}
// wishlist books
const wishListBooks = book => {
    let books = getWishBooks();
    const isExist = books.find(b => b.bookId === book.bookId);
    if (isExist) {
        return toast.error('Already added!')
    }
    books.push(book)
    localStorage.setItem('wishBooks', JSON.stringify(books))
    toast.success("Success")
}

export { getReadBooks, readBooks, wishListBooks,getWishBooks }
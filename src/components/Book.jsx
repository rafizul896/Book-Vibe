import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import PropTypes from 'prop-types';

const Book = ({ book }) => {
    const { bookId,category, rating, bookName, tags, author, image } = book;
    return (
        <Link to={`/book/${bookId}`} className="flex border flex-col p-6 rounded-2xl">
            <div className="bg-[#F3F3F3] flex justify-center items-center p-10 rounded-2xl">
                <img alt="" className="h-52" src={image} />
            </div>
            <div className="flex flex-col flex-1">
                <div className="list-none mt-5 flex justify-between text-[#23BE0A] font-medium">
                    {
                        tags.map((tag, idx) => <li key={idx}>{tag}</li>)
                    }
                </div>
                <h2 className="flex-1 py-3 text-2xl font-semibold leading-snug">{bookName}</h2>
                <h3 className="font-medium">By : {author}</h3>
                <div className="border border-dashed mt-3"></div>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-base dark:text-gray-600">
                    <span >{category}</span>
                    <div className="flex items-center gap-1">
                        <span>{rating}</span>
                        <CiStar />
                    </div>
                </div>
            </div>
        </Link>

    );
};

Book.propTypes = {
    book: PropTypes.object 
}

export default Book;
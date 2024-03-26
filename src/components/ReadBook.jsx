import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { RiBookLine } from "react-icons/ri";

const ReadBook = ({ book }) => {
    const { image, bookName, author, tags, category, publisher, totalPages, yearOfPublishing, rating } = book;
    return (
        <div className="flex gap-8 border border-[#1313134D] p-4 rounded-2xl">
            <div className="bg-[#F3F3F3] flex justify-center items-center py-8 px-10 rounded-2xl">
                <img className="" src={image} alt="" />
            </div>
            <div className="space-y-3">
                <h1 className="text-2xl font-semibold">{bookName}</h1>
                <p className="font-me ">By : {author}</p>
                <div className="flex gap-10">
                    <div className="flex list-none gap-5">
                        <p className="font-semibold">Tag</p>
                        {
                            tags.map((tag, idx) => <li key={idx} className="text-[#23BE0A]">#{tag}</li>)
                        }
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-xl"><CiLocationOn /></div>
                        <p>Year of Publishing:{yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex gap-10 text-[#13131399]">
                    <div className="flex items-center gap-2">
                        <div className="text-xl"><IoPeople /></div>
                        <p>Publisher: {publisher}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-xl"><RiBookLine /></div>
                        <p>Page {totalPages}</p>
                    </div>
                </div>
                <div className="border-t border-[#13131326]"></div>
                <div className="flex gap-5 my-4">
                    <button className="text-[#328EFF] bg-[#328EFF26] py-2 px-4 rounded-full">Category: {category}</button>
                    <button className="text-[#FFAC33] bg-[#FFAC3326] py-2 px-4 rounded-full">Rathing: {rating}</button>
                    <button className="bg-[#23BE0A] text-white py-2 px-4 rounded-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

ReadBook.propTypes = {
    book: PropTypes.object
}

export default ReadBook;
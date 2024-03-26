import { Link, useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const book = books.find(book => book.bookId === id)
    const { image, bookName, author, review, tags, category, publisher, totalPages, yearOfPublishing, rating } = book;

    return (
        <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-1/2 bg-[#1313130D] rounded-2xl">
                <img className="w-[100%] p-20" src={image} alt="" />
            </div>
            <div className="w-1/2 py-16 space-y-4">
                <article className="space-y-4">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-4xl">{bookName}</h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">By : {author}</p>
                        </div>
                    </div>
                    <div className="border-y py-3 font-medium text-lg">
                        <p>{category}</p>
                    </div>
                </article>
                <div>
                    <p><span className="font-bold">Review : </span>{review}</p>
                </div>
                <div>
                    <div className="flex flex-wrap py-6 gap-2 border-b border-dashed dark:border-gray-600">
                        <h3 className="font-bold">Tag : </h3>
                        <div>
                            {
                                tags.map((tag, idx) => <a key={idx} className="px-3 py-1 rounded-sm hover:underline text-[#23BE0A]">#{tag}</a>)
                            }
                        </div>
                    </div>
                    <div className="mt-5 flex items-center gap-10">
                        <div>
                            <div className="space-y-2">
                                <p>Number of page:</p>
                                <p>Publisher:</p>
                                <p>Year of Publishing:</p>
                                <p>Rating:</p>
                            </div>
                        </div>
                        <div className="space-y-2 font-semibold">
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <Link className="btn px-5 hover:bg-white text-black border-2 border-[#1313134D] hover:border-[#23BE0A] hover:text-[#23BE0A]">Read</Link>
                    <Link className="btn bg-[#59C6D2] text-white hover:text-black hover:border-2 hover:border-[#59C6D2] hover:bg-white">Wishlist</Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
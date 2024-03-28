import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero py-8 md:p-10">
            <div className="flex gap-5 md:gap-20 items-center flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/Dfr6Ddv/pngwing-1.png" className="rounded-lg md:w-[318px]" />
                <div className="space-y-7">
                    <h1 className="text-3xl md:text-5xl font-bold text-start">Books to freshen up <br className="hidden md:block"/> your bookshelf</h1>
                    <Link to="/listedBooks" className="btn bg-[#23BE0A] text-white hover:border-2 hover:border-[#23BE0A] hover:text-black">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
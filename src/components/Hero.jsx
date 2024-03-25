const Hero = () => {
    return (
        <div className="hero p-10">
            <div className="flex gap-20 items-center flex-col lg:flex-row-reverse">
                <img src="/src/assets/pngwing 1.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="space-y-7">
                    <h1 className="text-5xl font-bold text-start">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] text-white hover:border-2 hover:border-[#23BE0A] hover:text-black">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
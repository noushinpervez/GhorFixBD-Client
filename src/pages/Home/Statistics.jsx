const Statistics = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                <div className="text-center md:border-accent-500 md:border-r">
                    <h6 className="text-3xl font-bold lg:text-5xl xl:text-6xl">3K</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-600 uppercase lg:text-base">
                        Users
                    </p>
                </div>
                <div className="text-center md:border-accent-500 md:border-r">
                    <h6 className="text-3xl font-bold lg:text-5xl xl:text-6xl">1K</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-600 uppercase lg:text-base">
                        Home Repair Services
                    </p>
                </div>
                <div className="text-center md:border-accent-500 md:border-r">
                    <h6 className="text-3xl font-bold lg:text-5xl xl:text-6xl">500</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-600 uppercase lg:text-base">
                        Booked Services
                    </p>
                </div>
                <div className="text-center">
                    <h6 className="text-3xl font-bold lg:text-5xl xl:text-6xl">57</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-600 uppercase lg:text-base">
                        5-Star Ratings
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
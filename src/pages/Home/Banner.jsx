import { useRef } from "react";

const Banner = () => {
    const carouselRef = useRef(null);

    const scrollPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -carouselRef.current.offsetWidth,
                behavior: "smooth"
            });
        }
    };

    const scrollNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: carouselRef.current.offsetWidth,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="relative lg:mt-4">
            <div ref={ carouselRef } className="carousel max-w-full flex overflow-hidden">
                {/* Carousel item 1 */ }
                <div className="carousel-item flex-shrink-0 w-full relative">
                    <img
                        src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Carousel Image 1"
                        className="w-full h-[85vh] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60"></div>

                    <div className="absolute top-1/3 md:top-1/5 left-1/2 transform -translate-x-1/2 max-w-5xl">
                        <div className="max-w-full flex-shrink-0 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
                            <h1 className="lg:text-5xl font-bold tracking-tight text-white text-2xl">
                                Home Repair Services
                                <span className="text-sky-500"> Near You</span>
                            </h1>
                            <p className="mt-6 lg:text-lg lg:leading-8 text-gray-300">
                                Receive no-obligation quotes from reviewed, rated & trusted Handymen in minutes.
                            </p>
                            <div className="mt-5 flex items-center justify-center gap-x-6">
                                <a href="/signup"
                                    className="rounded-lg bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                                    rel="noreferrer">Try Now →
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Carousel item 2 */ }
                <div className="carousel-item flex-shrink-0 w-full relative">
                    <img
                        src="https://images.unsplash.com/photo-1608613304899-ea8098577e38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Carousel Image 2"
                        className="w-full h-[85vh] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60"></div>

                    <div className="absolute top-1/3 md:top-1/5 left-1/2 transform -translate-x-1/2 max-w-5xl">
                        <div className="max-w-full flex-shrink-0 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
                            <h1 className="lg:text-5xl font-bold tracking-tight text-white text-2xl">
                                Your Personal
                                <span className="text-sky-500"> Assistant</span>
                            </h1>
                            <p className="mt-6 lg:text-lg lg:leading-8 text-gray-300">
                                One-stop solution for your services. Order any service, anytime.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Carousel item 3 */ }
                <div className="carousel-item flex-shrink-0 w-full relative">
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Carousel Image 3"
                        className="w-full h-[85vh] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60"></div>

                    <div className="absolute top-1/3 md:top-1/5 left-1/2 transform -translate-x-1/2 max-w-5xl">
                        <div className="max-w-full flex-shrink-0 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
                            <h1 className="lg:text-5xl font-bold tracking-tight text-white text-2xl">
                                Solution to your
                                <span className="text-sky-500"> Needs</span>
                            </h1>
                            <p className="mt-6 lg:text-lg lg:leading-8 text-gray-300">
                                Any Service, Any Time, Anywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Previous Button */ }
            <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-2 lg:pl-4">
                <button
                    className="carousel-control-prev bg-primary-900 hover:bg-primary-800 text-text-50 rounded-full p-2 focus:outline-none"
                    onClick={ scrollPrev }
                >
                    <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
            </div>

            {/* Next Button */ }
            <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-2 lg:pr-4">
                <button
                    className="carousel-control-next bg-primary-900 hover:bg-primary-800 text-text-50 rounded-full p-2 focus:outline-none"
                    onClick={ scrollNext }
                >
                    <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Banner;
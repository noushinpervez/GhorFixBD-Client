import Title from "../../components/Title";

const HowItWorks = () => {
    return (
        <section className="container my-16 mx-auto px-2 md:px-4">
            <Title title="How It Works"></Title>

            <div className="relative overflow-hidden bg-[#36454F] rounded-3xl">
                <div className="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                        <div className="relative mt-12 lg:mt-20">
                            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="875" height="48" viewBox="0 0 875 48"
                                    fill="none">
                                    <path
                                        d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                                        stroke="#D4D4D8" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 12" />
                                </svg>
                            </div>
                            <div
                                className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                                <div>
                                    <div
                                        className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-800 border-2 border-gray-700 rounded-full shadow">
                                        <span className="text-xl font-semibold text-gray-200">1</span>
                                    </div>
                                    <h3
                                        className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-white md:mt-10">
                                        Select the Service
                                    </h3>
                                    <p className="mt-3 sm:mt-4 text-base text-gray-400">
                                        Pick the service you are looking for, from the website.
                                    </p>
                                </div>
                                <div>
                                    <div
                                        className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-800 border-2 border-gray-700 rounded-full shadow">
                                        <span className="text-xl font-semibold text-gray-200">2</span>
                                    </div>
                                    <h3
                                        className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-white md:mt-10">
                                        Pick your schedule
                                    </h3>
                                    <p className="mt-3 sm:mt-4 text-base text-gray-400">
                                        Pick your convenient date to avail the service.
                                    </p>
                                </div>
                                <div>
                                    <div
                                        className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-800 border-2 border-gray-700 rounded-full shadow">
                                        <span className="text-xl font-semibold text-gray-200">3</span>
                                    </div>
                                    <h3
                                        className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-white md:mt-10">
                                        Book Your Service & Relax
                                    </h3>
                                    <p className="mt-3 mb-4 sm:mt-4 text-base text-gray-400">
                                        Review and book the service. Now just sit back and relax. We’ll assign the expert service provider for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
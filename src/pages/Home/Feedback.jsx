const Feedback = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font relative my-16">
            <div className="absolute inset-0 bg-gray-900">
                <iframe
                    title="map"
                    width="100%"
                    height="100%"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mirpur-10,%20Dhaka,%20Bangladesh+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    style={ { filter: 'grayscale(1) contrast(1.2) opacity(0.16)' } }
                ></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-background-50 shadow-md rounded-3xl p-6 lg:p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 text-text-950">
                    <h2 className="text-lg mb-1 font-medium title-font">Feedback</h2>
                    <p className="leading-relaxed mb-5">Your Opinion Shapes Our Service: Share Your Home Repair Experience!</p>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-accent-100 rounded-xl border border-gray-700 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-700 text-base outline-none text-text-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full h-32 resize-none bg-accent-100 rounded-2xl border border-gray-700 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-700 text-base outline-none text-text-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    <button className="text-text-50 font-semibold bg-primary-950 border-0 py-2 px-6 focus:outline-none hover:bg-primary-900 rounded-full text-lg">Submit</button>
                    <p className="text-xs text-gray-500 text-opacity-90 mt-3 text-center">Your input helps us enhance our services to better serve you.</p>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
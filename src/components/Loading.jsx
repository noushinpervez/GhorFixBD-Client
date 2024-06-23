const Loading = () => {
    return (
        <div className="inset-0 bg-secondary-50 fixed flex w-full h-full items-center justify-center duration-500 transition-opacity" style={ { zIndex: 6000 } }>
            <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
                <svg className="h-12 w-12 lg:h-16 lg:w-16 animate-spin stroke-secondary-600" viewBox="0 0 256 256">
                    <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="24"></line>
                    <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                    </line>
                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="24"></line>
                    <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                    </line>
                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="24"></line>
                    <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                    </line>
                </svg>
                <span className="text-2xl lg:text-4xl font-medium text-secondary-600">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
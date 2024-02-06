import React from "react";

const Industry = () => {
  return (
    <div className="bg-[#F5F8FB]">
    <div className="p-4 border border-gray-300 rounded-lg ">
      <div className="mb-4">
        <div className="text-2xl mb-10 mt-24 text-center">
          What field are you interested in?
        </div>
        <div className="mt-4"> {/* Adjusted margin top */}
          <button className="relative block mx-auto w-1/2 px-6 py-3 border-b border-gray-300 rounded-lg hover:bg-gray-100 mb-2 text-left text-xl">
            Software Engineering
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              {/* Arrow pointer */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
          <button className="relative block mx-auto w-1/2 px-6 py-3 border-b border-gray-300 rounded-lg hover:bg-gray-100 mb-2 text-left text-xl">
            Civil Engineering
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              {/* Arrow pointer */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
          <button className="relative block mx-auto w-1/2 px-6 py-3 border-b border-gray-300 rounded-lg hover:bg-gray-100 mb-2 text-left text-xl">
            Business Management
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              {/* Arrow pointer */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
          <button className="relative block mx-auto w-1/2 px-6 py-3 border-b border-gray-300 rounded-lg hover:bg-gray-100 mb-2 text-left text-xl">
            HR Management
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              {/* Arrow pointer */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Industry;




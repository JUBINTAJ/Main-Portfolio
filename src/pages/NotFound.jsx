import React from 'react';

const NotFound = () => {
  return (
    <>
      <style>
        {`
          .four_zero_four_bg {
            background-image: url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif');
            background-position: center;
          }
        `}
      </style>
      <section className="page_404 py-10 bg-white font-serif">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
              <div className="four_zero_four_bg h-[400px] bg-cover">
                <h1 className="text-8xl text-center text-black">404</h1>
              </div>
              <div className="text-center mt-[-50px]">
                <h3 className="text-4xl">Look like you're lost</h3>
                <p className="mt-4 text-lg">The page you are looking for is not available!</p>
                <a
                  href="/"
                  className="inline-block mt-4 px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md"
                >
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;

import React from 'react';

function Banner() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-10 flex flex-col md:flex-row my-10 dark:bg-slate-900 dark:text-white rounded-lg">
      
      {/* Left Section */}
      <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold">
            Hello, welcome here to learn something <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laborum adipisci tempora harum laboriosam amet deserunt reprehenderit quasi vero voluptatem, repellat sequi fugiat, quaerat, ipsum officia delectus! Consequuntur, ullam a.
          </p>
          <input
            type="email"
            className="input input-bordered w-full max-w-sm dark:bg-slate-800 dark:border-gray-600"
            placeholder="Enter your email"
          />
          <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>
      </div>

      {/* Right Section (Banner Image) */}
      <div className="order-1 w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/Banner.jpg"
          alt="banner"
          className="w-full h-auto object-cover rounded-lg !brightness-100 !opacity-100 dark:brightness-100 dark:opacity-100"
        />
      </div>
    </div>
  );
}

export default Banner;

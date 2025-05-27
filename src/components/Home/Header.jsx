import React from "react";

const Header = () => {
  return (
    <header className="p-5 bg-blue-100">
      <div className="px-4 px-lg-5 my-5">
        <div className="text-center">
          <h1 className="text-xl font-bold ">Welcome to SHOPAPP...</h1>
          <p className="mb-4 m-2">
            Discover the latest trends in fashion and the best selling products
            currently!
          </p>
          <a
            href="#shop"
            className="rounded-full px-4 py-2 bg-yellow-200 font-serif"
          >
            Shop Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

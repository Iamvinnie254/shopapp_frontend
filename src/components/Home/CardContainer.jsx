import React from "react";
import HomeCard from "./HomeCard";

const CardContainer = ({products}) => {
  return (
    <section className="py-5" id="shop">
      <h4 className="text-center text-3xl font-semibold">Our Products</h4>

      <div className="px-4 lg:px-5 mt-5">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {products.map(product => <HomeCard key={product.id} product={ product} />)}
        </div>
      </div>
    </section>
  );
};

export default CardContainer;

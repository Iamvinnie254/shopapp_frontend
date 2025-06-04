import React from 'react'
import HomeCard from '../Home/HomeCard'

const RelatedProducts = ({products}) => {
  return (
    <section className="py-3 bg-blend-lighten">
      <div className="px-4 mt-3">
        <h2 className="font-bold mb-9 text-center text-4xl p-5 ">
          Related Products
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          {products.map((product) => (
            <HomeCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts
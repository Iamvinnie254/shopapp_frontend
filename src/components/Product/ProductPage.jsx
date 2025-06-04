import React, { useEffect, useState } from "react";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "react-router-dom";
import api from "../../api";
import { baseURL } from "../../api";

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get(`product_detail/${slug}`);
        console.log(response.data);

        setProduct(response.data);
        setSimilarProducts(response.data.similar_products || []); 
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(
          err.response?.data?.message || err.message || "Failed to load product"
        );
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  /* Show loading state */
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-blue-900">
        <div className="text-5xl text-white font-serif">Loading product...</div>
      </div>
    );
  }

  /* Show error state */
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-center">
          <h2 className="text-xl font-bold mb-2">Error Loading Product</h2>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  ///*  Show message if no product found */
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="py-3">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="product-image">
              <img
                src={`${baseURL}${product.image}`}
                alt={product.name || "Product image"}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
                
              />
            </div>

            <div className="product-details">
              <div>
                <h1>SVW : 6/4/2025</h1>
             </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                {product.name || "Product Name"}
              </h1>

              <div className="mb-4">
                <span className="text-xl font-semibold text-green-600">
                  Ksh. {product.price || "0"}
                </span>
              </div>

              <p className="text-gray-700 mb-6">
                {product.description || "No description available"}
              </p>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors duration-200 flex items-center gap-2"
                  onClick={() => {
                     /* Add your cart logic here */
                    console.log("Adding to cart:", product);
                  }}
                >
                  <i className="fas fa-shopping-cart"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Only render RelatedProducts if similarProducts exists and has items */}
      {similarProducts && similarProducts.length > 0 && (
        <RelatedProducts products={similarProducts} />
      )}
    </div>
  );
};

export default ProductPage;

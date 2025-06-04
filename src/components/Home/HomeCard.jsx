import { Link } from "react-router-dom";
import { baseURL } from "../../api";


const HomeCard = ({product}) => {
  return (
    <Link to={`/products/${product.slug}`} onClick={window.scrollTo(0,0)}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={`${baseURL}${product.image}`}
          alt="Product"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h5 className="text-lg font-semibold mb-2">{product.name} </h5>
                  <p className="text-gray-600">{`Ksh.${product.price}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;

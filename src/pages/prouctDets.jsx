import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setError("Failed to load product details"));
  }, [id]);

  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-8 bg-sky-100 min-h-screen flex flex-col items-center">
      <img src={product.image} alt={product.title} className="w-[200px] h-[250px] object-contain mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-xl text-gray-700 mb-2">₹{product.price}</p>
      <p className="text-md max-w-xl text-center">{product.description}</p>
      <p className="mt-2 text-sm italic">Category: {product.category}</p>
      {/* <p className="mt-2 text-sm italic">Rating: {product.rating}</p> */}
    </div>
  );
}

export default ProductDetails;

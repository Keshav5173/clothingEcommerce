import { useEffect, useState } from "react";
import axios from "axios";
import ProductCardComponet from "../components/productCardComponent";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomPrevArrow } from "../components/customArrowComponent";
import { CustomNextArrow } from "../components/customArrowComponent";

function HomePage() {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState("");
  const [searchThing, setSearchThing] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data || [];
        setProductData(data);
        // console.log(response.data);

        const categorySet = new Set(data.map((p) => p.category).filter(Boolean));
        setCategories([...categorySet]);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch product data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  const handlecategoryChange = (e) => {
    setCat(e.target.value);
  };

  const handleSearchTabChange = (e) => {
    setSearchThing(e.target.value);
  };

  const filteredProducts = productData.filter(
    (product) =>
      (!cat || product.category === cat) &&
      (!searchThing || product.title.toLowerCase().includes(searchThing.toLowerCase()))
  );

  return (
    <div className="w-screen min-h-screen bg-sky-200">
      <div className="w-screen h-[10vh] flex justify-center items-center gap-4 bg-sky-300">
        <div className="flex gap-[50px]">
          <input
            type="text"
            placeholder="Search Product"
            className="h-[6vh] w-[20vw] bg-white p-[20px] rounded-lg"
            onChange={handleSearchTabChange}
          />
          <select
            className="w-[12vw] h-[6vh] p-2 rounded-lg bg-white"
            onChange={handlecategoryChange}
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-[50vh] text-2xl font-semibold">
          Loading products...
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-[50vh] text-xl text-red-600">
          {error}
        </div>
      ) : (
        <>
          <div className="w-[90vw] m-auto mt-[3vh]">
            <Slider {...settings}>
              {productData.map((product, index) => (
                <div
                  key={index}
                  className=" h-[40vh] bg-[#f0f8ff] relative rounded-xl"
                >
                  <div className="bg-[#f0f8ff]">
                    <img
                      className="w-[9vw] h-[23vh] absolute top-[3%] left-[50%] translate-x-[-50%] object-contain"
                      src={product.image}
                      alt=""
                    />
                  </div>

                  <div className="absolute top-[65%] left-[50%] translate-x-[-50%] text-center">
                    <p className="text-xl font-semibold">₹{product.price}</p>
                    <button className="w-[10vw] h-[5vh] bg-sky-300 rounded-md border-2 text-xl hover:bg-sky-400 transition duration-200 cursor-pointer"
                    onClick={()=>{navigate(`/product/${product.id}`)}}>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="w-full flex flex-wrap justify-center mt-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCardComponet
                  key={index}
                  id={product.id}
                  img={product.image}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  rating = {product.rating}
                />
              ))
            ) : (
              <div className="text-xl font-semibold text-gray-600 mt-10">
                No products found for the selected filter or search term.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;

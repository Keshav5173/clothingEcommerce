import { useEffect, useState } from "react";
import axios from "axios";
import ProductCardComponet from "../components/productCardComponent";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState("");
  const [searchThing, setSearchThing] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data || [];
        setProductData(data);
        console.log(response.data);

        const categorySet = new Set(data.map(p => p.category).filter(Boolean));
        setCategories([...categorySet]);

        console.log("Unique categories:", [...categorySet]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
  };

  const handlecategoryChange = (e)=>{
    setCat(e.target.value);
  }

  const handleSearchTabChange = (e)=>{
    setSearchThing(e.target.value);
  }

  return (
    <div className="w-screen h-full bg-sky-200">
      <div className="w-screen h-[10vh] flex justify-center items-center relative gap-4 bg-sky-300">
        <div className="flex relative gap-[50px]">
            <input
                type="text"
                placeholder="Search Product"
                className="h-[6vh] w-[20vw] bg-white p-[20px] rounded-lg "
                onChange={(e)=>handleSearchTabChange(e)}
            />
                <select className="w-[12vw] h-[6vh] p-2 rounded-lg bg-white" onChange={(e)=>handlecategoryChange(e)}>
                    <option value="">Select Category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                </select>
            </div>
          </div>
        <div>
      </div>
      <div className="w-[90vw] m-auto mt-[3vh]">
        <Slider {...settings}>
          {productData.map((product, index)=>(
            <div className="w-[15vw] h-[40vh] bg-[#f0f8ff] relative ">
              <div className="bg-[#f0f8ff]">
                <img className="w-[13vw] h-[23vh] absolute top-[3%] left-[50%] translate-x-[-50%] bg-[#f0f8ff] " src={product.image} alt="" />
              </div>

              <div className="absolute top-[65%] left-[50%] translate-x-[-50%] text-center ">
                <p className="text-xl font-semibold">₹{product.price}</p>
                <button className="w-[10vw] h-[5vh] bg-sky-300 rounded-md border-2 text-xl hover:bg-sky-400 transition duration-200 cursor-pointer">View Details</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-full flex flex-wrap justify-center">
        {productData
          .filter((product) =>
            (!cat || product.category === cat) &&
            (!searchThing || product.title.toLowerCase().includes(searchThing.toLowerCase()))
          )
          .map((product, index) => (
            <ProductCardComponet
              key={index}
              img={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))}
      </div>

    </div>
  );
}

export default HomePage;



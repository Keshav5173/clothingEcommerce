import { useNavigate } from "react-router-dom";

export const ProductCardComponet= (props)=>{
    const navigate = useNavigate();
    return (
        <div 
        className="w-[18vw] md:w-[20vw] sm:w-[30vw] xs:w-[40vw] 2xs:w-[80vw] h-[60vh] sm:h-[50vh]  m-2 flex flex-col justify-evenly items-center relative gap-2 shadow-2xl rounded-lg p-2 bg-[#f0f8ff]">
        <p className="font-bold text-lg ">
            {props.category}
        </p>
        <img
            src={props.img}
            alt={`${props.title} image`}
            className="w-[15vw] md:w-[13vw] sm:w-[25] xs:w-[30vw] 2xs:w-[40vw] h-[35vh] md:h-[25vh] sm:h-[18vh] xs:h-[40vh] 2xs:h-[35vh] rounded-md object-cover   object-cover"
        />
            
        <p
            className="text-xl text-center font-medium truncate w-[15vw] sm:w-[20vw] xs:w-[25vw] 2xs:w-[60vw] "
            title={props.title}
            >
            {props.title}
        </p>
        <div className="flex gap-2 sm:block">
            <p className="= font-bold text-lg text-center">
                ₹{props.price}
            </p>

            <button className="w-[7vw] sm:w-[10vw] xs:w-[15vw] 2xs:w-[30vw] h-[5vh] bg-sky-300 rounded-md border-2 text-lg hover:bg-sky-400 transition duration-200 cursor-pointer"
             onClick={() => navigate(`/product/${props.id}`)}>
                details
            </button>
        </div>
        </div>
    );
};

export default ProductCardComponet 

export const ProductCardComponet= (props)=>{
  
    return (
        <div className="w-[18vw] h-[60vh] m-2 flex flex-col justify-center items-center relative gap-2 shadow-2xl rounded-lg p-2 bg-[#f0f8ff]">
        <img
            src={props.img}
            alt={`${props.title} image`}
            className="w-[15vw] h-[35vh] rounded-md object-cover"
        />
        <p className="absolute font-bold text-2xl top-[1%] left-[10%]">
            {props.category}
        </p>
            
        <p
            className="text-xl text-center font-medium truncate w-[15vw]"
            title={props.title}
            >
            {props.title}
        </p>
        <div className="flex gap-2">
            <p className="= font-bold text-xl">
                ₹{props.price}
            </p>
            <button className="w-[10vw] h-[5vh] bg-sky-300 rounded-md border-2 text-xl hover:bg-sky-400 transition duration-200 cursor-pointer">
                View details
            </button>
        </div>
        </div>
    );
};

export default ProductCardComponet 

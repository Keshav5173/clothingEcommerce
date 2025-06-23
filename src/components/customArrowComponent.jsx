export const CustomPrevArrow = ({ className, onClick }) => (
  <div
    className={`${className} !flex !items-center !justify-center z-10 left-[-30px]`}
    onClick={onClick}
  >
    <span className="h-[5vh] text-black text-[4rem] bg-transparent rounded-full p-2  hover:bg-sky-200 transition select-none">
      ←
    </span>
  </div>
);

export const CustomNextArrow = ({ className, onClick }) => (
  <div
    className={`${className} !flex !items-center !justify-center z-10 right-[-30px]`}
    onClick={onClick}
  >
    <span className="h-[5vh] text-black text-[4rem] bg-transparent rounded-full p-2  hover:bg-sky-200 transition select-none">
      →
    </span>
  </div>
);

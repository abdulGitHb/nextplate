

const CardHover = () => {

  const img= "Fortune \n500 \nCompanies";

  return (
    <div
    after-dynamic-value={img}
    className="relative z-10 w-[220px] h-[320px] bg-gray-100 flex items-center justify-center text-[25px] font-bold rounded-lg cursor-pointer
    
    before:absolute before:content-[''] before:w-[20%] before:h-[20%] before:flex before:items-center before:justify-center before:text-xl before:font-bold before:bg-[#97144d] before:top-0 before:right-0 before:rounded-bl-full before:rounded-tr-md
    
    after:absolute after:content-[''] after:w-[20%] after:h-[20%] after:flex after:items-center after:justify-center after:text-xl after:font-bold after:bg-[#97144d] after:bottom-0 after:left-0 after:rounded-tr-full
    
    hover:before:w-[100%] hover:before:h-[100%] hover:before:transition-all hover:before:duration-500 hover:before:delay-150 hover:before:rounded-lg
    
    hover:after:w-[100%] hover:after:h-[100%] hover:after:transition-all hover:after:duration-500 hover:after:delay-150 hover:after:rounded-lg
    
    hover:after:content-[attr(after-dynamic-value)] hover:after:text-4xl hover:after:text-center hover:after:text-gray-100
    ">
      Category A
    </div>



    // <div className="w-full h-[254px] bg-[rgb(255,255,255)] flex gap-5 p-1 mx-auto">
    //   <p className="h-[100%] flex-1 flex flex-col group overflow-hidden cursor-pointer border-2 transition-all duration-500 bg-[#cfcfcf] border-solid border-[#ff5a91] justify-center items-center hover:justify-start hover:pt-4 hover:flex-[4]"><span className="min-w-[14em] p-1 text-center transition-all duration-300">Category A</span>
    //   <span className="hidden group-hover:block my-auto group-hover:text-4xl transition-all duration-500 text-center">Fortune <br /> 500 <br /> Companies</span>
    //   </p>
    //   <p className="h-[100%] flex-1 flex flex-col group overflow-hidden cursor-pointer border border-r-2 transition-all duration-500 bg-[#cfcfcf] border-solid border-[#ff5a91] justify-center items-center hover:justify-start hover:pt-4 hover:flex-[4]"><span className="min-w-[14em] p-1 text-center -rotate-90 group-hover:rotate-0 transition-all duration-300">Category A</span>
    //   <span className="hidden group-hover:block my-auto group-hover:text-4xl transition-all duration-500 text-center">Fortune <br /> 500 <br /> Companies</span>
    //   </p>
    //   <p className="h-[100%] flex-1 flex flex-col group overflow-hidden cursor-pointer border border-r-2 transition-all duration-500 bg-[#cfcfcf] border-solid border-[#ff5a91] justify-center items-center hover:justify-start hover:pt-4 hover:flex-[4]"><span className="min-w-[14em] p-1 text-center -rotate-90 group-hover:rotate-0 transition-all duration-300">Category A</span>
    //   <span className="hidden group-hover:block my-auto group-hover:text-4xl transition-all duration-500 text-center">Fortune <br /> 500 <br /> Companies</span>
    //   </p>
    //   <p className="h-[100%] flex-1 flex flex-col group overflow-hidden cursor-pointer border border-r-2 transition-all duration-500 bg-[#cfcfcf] border-solid border-[#ff5a91] justify-center items-center hover:justify-start hover:pt-4 hover:flex-[4]"><span className="min-w-[14em] p-1 text-center -rotate-90 group-hover:rotate-0 transition-all duration-300">Category A</span>
    //   <span className="hidden group-hover:block my-auto group-hover:text-4xl transition-all duration-500 text-center">Fortune <br /> 500 <br /> Companies</span>
    //   </p>
    // </div>
  );
};

export default CardHover;

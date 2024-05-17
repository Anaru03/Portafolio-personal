const Knowledge = () => {
    return(
        <div id="Knowledge" className="p-10 flex flex-col items-center justify-center">
            <h1 data-aos='fade-right' className="text-[52px] font-semibold mb-20 leading-normal uppercase text-violet-400">KNOWLEDGE</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-16">
                <h2 data-aos='fade-up' className="text-[20px] flex items-center justify-center font-semibold text-orange-200 rounded-3xl h-28 w-44 border-2 border-orange-200 know_glow">HTML5</h2>
                <h2 data-aos='fade-up' className="text-[20px] flex items-center justify-center font-semibold text-orange-200 rounded-3xl h-28 w-44 border-2 border-orange-200 know_glow">PYTHON</h2>
                <h2 data-aos='fade-up' className="text-[20px] flex items-center justify-center font-semibold text-orange-200 rounded-3xl h-28 w-44 border-2 border-orange-200 know_glow">CSS</h2>
                <h2 data-aos='fade-down' className="text-[20px] flex items-center justify-center font-semibold text-orange-200 rounded-3xl h-28 w-44 border-2 border-orange-200 know_glow">SQL</h2>
                <h2 data-aos='fade-down' className="text-[20px] flex items-center justify-center font-semibold text-orange-200 rounded-3xl h-28 w-44 border-2 border-orange-200 know_glow">REACT</h2> 
                <h2 data-aos='fade-down' className="text-[20px] flex items-center justify-center font-semibold text-orange-200 rounded-3xl h-28 w-44 border-2 border-orange-200 know_glow">KOTLIN</h2>
            </div>
        </div>
    );
};

export default Knowledge;


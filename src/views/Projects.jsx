import PotterHeadBlog from '@assets/PotterHeadBlog.png';
import MiGaleria from '@assets/MiGaleria.jpeg';
import MK from '@assets/MK.png';
import StyleLit from '@assets/StyleLit.png';

const Projects = () => {
    return (
        <div id='Projects' className="p-8 flex flex-col items-center justify-center">
            <h1 data-aos='fade-down' className="text-[52px] font-semibold mb-14 leading-normal uppercase text-white">PROJECTS</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-items-center gap-16 px-4">
                <div className="flex items-center justify-center h-full px-1/5">
                    <a href="https://github.com/Anaru03/Proyecto-Blog" target="_blank" rel="noopener noreferrer">
                        <img height={450} width={500} data-aos='fade-right' className="text-[26px] rounded-3xl p-1 border-1 border-black PRY_glow" src={PotterHeadBlog} alt="PotterHeadBlog" />
                    </a>
                </div>
                <div className="flex items-center justify-center h-full px-1/5">
                    <a href="https://github.com/Anaru03/Laboratorio__6" target="_blank" rel="noopener noreferrer">
                        <img height={450} width={500} data-aos='fade-left' className="text-[26px] rounded-3xl p-1 border-1 border-black PRY_glow" src={MiGaleria} alt="MiGaleria" />
                    </a>
                </div>
                <div className="flex items-center justify-center h-full px-1/5">
                    <a href="https://github.com/Diegoval-Dev/MK-Publicidad" target="_blank" rel="noopener noreferrer">
                        <img height={450} width={500} data-aos='fade-right' className="text-[26px] rounded-3xl p-1 border-1 border-black PRY_glow" src={MK} alt="MK" />
                    </a>
                </div>
                <div className="flex items-center justify-center h-full">
                    <a href="https://github.com/Diegoval-Dev/StyleLit" target="_blank" rel="noopener noreferrer">
                        <img data-aos='fade-left' className=" text-[26px] rounded-3xl p-1 border-1 border-black PRY_glow sm:h-[450px] sm:w-[500px] lg:h-[250px] lg:w-[120px]" src={StyleLit} alt="StyleLit" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;

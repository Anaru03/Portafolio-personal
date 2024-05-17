import PotterHeadBlog from '@assets/PotterHeadBlog.png';
import MiGaleria from '@assets/MiGaleria.jpeg';
import MK from '@assets/MK.png';
import StyleLit from '@assets/StyleLit.png';


const Projects = () => {
    return(
        <div id='Projects' className="p-20 flex flex-col items-center justify-center">
    <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-violet-400">PROJECTS</h1>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-items-center gap-20">
        <div className="flex items-center justify-center h-full">
            <img height={450} width={500} data-aos='fade-up' className="text-[26px] rounded-3xl p-1/2 border-2 border-orange-200 PRY_glow" src={PotterHeadBlog} alt="PotterHeadBlog" />
        </div>
        <div className="flex items-center justify-center h-full">
            <img height={450} width={500} data-aos='fade-down' className="text-[26px] rounded-3xl p-1/2 border-2 border-orange-200 PRY_glow" src={MiGaleria} alt="MiGaleria" />
        </div>
        <div className="flex items-center justify-center h-full">
            <img height={450} width={500} data-aos='fade-down' className="text-[26px] rounded-3xl p-1 border-2 border-orange-200 PRY_glow" src={MK} alt="MK" />
        </div>
        <div className="flex items-center justify-center h-full">
            <img height={250} width={120} data-aos='fade-up' className="text-[26px] rounded-3xl p-1 border-2 border-orange-200 PRY_glow" src={StyleLit} alt="StyleLit" />
        </div>
    </div>
</div>

    );
};

export default Projects;

/**
https://github.com/Anaru03/Proyecto-Blog
https://github.com/Anaru03/Laboratorio__6
https://github.com/Diegoval-Dev/MK-Publicidad
https://github.com/Diegoval-Dev/StyleLit
 */
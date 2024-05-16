import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import ImageInit from '@assets/ImageInit.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750,
    });

    return (
        <div data-aos='fade-up' className="lg:px-56 px-10 py-10 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-20 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 className="text-[52px] font-semibold mb-8 leading-normal uppercase">
                    BIENVENIDO AL <span className="text-violet-400">PORTFOLIO WEBSITE</span>
                </h1>
                <p>
                    Hola soy Ruth de León. Gracias por visitar mi portafolio personal. Aquí podrás conocer más sobre mí, mis habilidades, proyectos y experiencias académicas.
                    Mi objetivo es mostrarte lo que puedo hacer y cómo puedo contribuir a tus proyectos o a tu equipo.
                    ¡Disfruta navegando por mi portafolio y no dudes en contactarme!
                </p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/ruth-de-le%C3%B3n-2a5566203/" className="text-orange-200 hover:text-orange-100 rounded-full glow p-2">
                                <FaLinkedinIn className="text-[28px] glow-icon" />
                            </a>
                            <a href="https://github.com/Anaru03" className="text-orange-200 hover:text-orange-100 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px] glow-icon" />
                            </a>
                            <a href="https://twitter.com/anai_ruth" className="text-orange-200 hover:text-orange-100 rounded-full glow p-2">
                                <FiTwitter className="text-[28px] glow-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img src={ImageInit} alt="ImageInit" width={290} height={290}  className="rounded-full border-2 p-1 border-violet-400 image_glow" />
        </div>
    );
};



export default Banner;

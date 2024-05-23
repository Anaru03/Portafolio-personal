import ImagePerfil from '@assets/ImagePerfil.jpeg';
import PdfDocument from '@assets/CV_Ruth_de_Leon.pdf'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AboutMe = () => {
    const handleDownloadCV = () => {
        window.open(PdfDocument, '_blank');
    };

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 1000,
        })
    },[])

    return (
        <div id='AboutMe' className="lg:px-56 px-5 py-8 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-1 flex flex-col justify-center lg:items-start items-center text-white lg:order-2">
                <h1 data-aos='fade-right' className="text-[52px] font-semibold mb-8 leading-normal uppercase">
                    <span className="text-violet-400">ABOUT</span> ME
                </h1>
                <p data-aos='fade-left'>
                ¡Hola! Soy Ruth de León, una joven de 20 años nacida en julio del 2003 en Mazatenango, Suchitepéquez, pero residiendo en la 
                Ciudad de Guatemala desde hace más de una década. Donde estudie desde el 2013 hasta 2021 en el Colegio Monte María. Continuando 
                mis estudios en el 2022 hasta la actualidad, cursando mi tercer año de estudios en Ingeniería en Ciencia de la 
                Computación y Tecnologías de la Información en la Universidad del Valle de Guatemala. Me considero una persona divertida, 
                ordenada, sincera, competitiva y enfocada. 
                Mi pasión por la tecnología me impulsa a buscar constantemente nuevas oportunidades para aprender y crecer. 
                Mi objetivo es utilizar mis habilidades y conocimientos para contribuir al desarrollo de soluciones innovadoras que impacten 
                positivamente a la sociedad. 
                ¡Estoy emocionada de conectarme contigo y compartir más sobre mí!
                        
                </p>
            <div className="flex mt-8 gap-2">
                <div className="flex items-center justify-center">
                    <div className="flex space-x-4">
                        <button className="cv-button shadow-lg hover:shadow-violet-400 text-white border-2 hover:bg-violet-400 border-violet-400 rounded-lg py-3 px-8 uppercase relative overflow-hidden" onClick={handleDownloadCV}>DOWNLOAD CV</button>
                    </div>
                </div>
            </div>
        </div>
            <img data-aos='fade-down' src={ImagePerfil} alt="ImagePerfil" width={290} height={290} className="lg:order-1 mb-10 lg:mb-0 rounded-full border-2 p-1 border-violet-400 image_glow" />
        </div>
    );
};

export default AboutMe;

import { useState } from "react";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";
import { BiMenuAltRight} from "react-icons/bi";

const Nav = () => {
    const [click, setClick] = useState(false)
    
    const handleclick = () => setClick(!click);
    
    const content = <>

        <div className={`lg:hidden block absolute top-20 left-0 right-0 bg-stone-950 transition ${click ? 'z-50' : 'z-0'}`}>
            <ul className="text-center text-xl p-5">
                <Link to="Home" smooth={true} duration={500} spy={true}>
                    <li className="my-4 py-4 border-b border-amber-800 hover:bg-stone-800 hover:rounded ">Home</li>   
                </Link>

                <Link to="AboutMe" smooth={true} duration={500} spy={true}>
                    <li className="my-4 py-4 border-b border-amber-800 hover:bg-stone-800 hover:rounded ">About Me</li>
                </Link>

                <Link to="Academic" smooth={true} duration={500} spy={true}>
                    <li className="my-4 py-4 border-b border-amber-800 hover:bg-stone-800 hover:rounded ">Academic</li>
                </Link>

                <Link to="Knowledge" smooth={true} duration={500} spy={true}>
                    <li className="my-4 py-4 border-b border-amber-800 hover:bg-stone-800 hover:rounded ">Knowledge</li>
                </Link>

                <Link to="Projects" smooth={true} duration={500} spy={true}>
                    <li className="my-4 py-4 border-b border-amber-800 hover:bg-stone-800 hover:rounded ">Projects</li>
                </Link>

                <Link to="ContactMe" smooth={true} duration={500} spy={true}>
                    <li className="my-4 py-4 border-b border-amber-800 hover:bg-stone-800 hover:rounded ">Contact Me</li> 
                </Link>              
            </ul>
        </div>

    </>
    return(
        <nav>
            <div className="h-10vh flex justify-between items-center z-50 text-orange-200 lg:py-5 px-20 py-3 border-b border border-stone-900">
                <div className="flex items-center flex-1">
                    <img src="src/assets/Logo_Anaru.png" alt="Logo"  className="w-1/6 h-auto"/>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-sm">
                            
                            <Link to="Home" smooth={true} duration={500} spy={true}>
                                <li className="hover:text-yellow-600 transition border-b-2 border-stone-950 hover:border-yellow-600 cursor-pointer">Home</li>   
                            </Link>

                            <Link to="AboutMe" smooth={true} duration={500} spy={true}>
                                <li className="hover:text-yellow-600 transition border-b-2 border-stone-950 hover:border-yellow-600 cursor-pointer">About</li>
                            </Link>

                            <Link to="Academic" smooth={true} duration={500} spy={true}>
                                <li className="hover:text-yellow-600 transition border-b-2 border-stone-950 hover:border-yellow-600 cursor-pointer">Academic</li>
                            </Link>

                            <Link to="Knowledge" smooth={true} duration={500} spy={true}>
                                <li className="hover:text-yellow-600 transition border-b-2 border-stone-950 hover:border-yellow-600 cursor-pointer">Knowledge</li>
                            </Link>

                            <Link to="Projects" smooth={true} duration={500} spy={true}>
                                <li className="hover:text-yellow-600 transition border-b-2 border-stone-950 hover:border-yellow-600 cursor-pointer">Projects</li>
                            </Link>

                            <Link to="ContactMe" smooth={true} duration={500} spy={true}>
                                <li className="hover:text-yellow-600 transition border-b-2 border-stone-950 hover:border-yellow-600 cursor-pointer">Contact</li> 
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden transition" onClick={handleclick}>
                    {click ? <IoClose className="text-2xl"/> : <BiMenuAltRight className="text-2xl"/>}
                </button>    
            </div>
        </nav>
    );
};

export default Nav;

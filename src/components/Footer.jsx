const Footer = () => {
    return (
        <footer className="bg-stone-900 text-violet-400 lg:px-10 px-4 py-3">
            <div className="container mx-auto grid grid-cols-1 lg:flex lg:justify-between">
                <div className="mb-4 md:mb-0 flex items-center">
                    <img src="src/assets/Logo_Anaru.png" alt="Logo" className="w-1/6 h-auto lg:w-1/12 mr-4"/>

                    <div>
                        <h2 className="text-[22px] font-semibold text-white py-2 uppercase">CONTACT</h2>
                        <p className="text-[12px] my-1">Correo: rumorataya@gmail.com</p>
                        <p className="text-[12px] my-1">Teléfono: +502 4769-6513</p>
                    </div>
                </div>
            </div>

            <div className="text-white text-center lg:text-center">
                <span>© 2024 AnaRu. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;

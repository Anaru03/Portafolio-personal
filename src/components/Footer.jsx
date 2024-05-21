const Footer = () => {
    return(
        <footer className="bg-stone-900 text-violet-400 lg:px48 px-4 py-20">
            <div className="container mx-auto grid grid-cols-1">
                <div className="mb-4 md:mb-0">
                    <img src="src/assets/Logo_Anaru.png" alt="Logo" class="w-1/6 h-auto lg:w-1/12"/>
                </div>                   
                <div>
                    <h2>CONTACT</h2>
                        <p>Correo: rumorataya@gmail.com</p>
                        <p>Teléfono: +502 4769-6513</p>
                </div>
                <span className="text-white">© 2021 Anaru. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;

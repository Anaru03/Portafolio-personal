import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_ipavfll', 'template_9h76r9j', form.current, 'BkrmS7vVa5HO-eSbM')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    alert('Excelente, se ha enviado tu mensaje. Gracias por comunicarte con Ruth de León');
                    form.current.reset();
                    setLoading(false);
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    alert(`Ocurrió un error al enviar tu mensaje, prueba de nuevo. ${error.text}`);
                    setLoading(false);
                }
            );
    };

    return (
        <div id="ContactMe" className="p-12 lg:p-20 flex flex-col items-center justify-center">
            <h1 data-aos='fade-down' className="text-[52px] font-semibold mb-8 leading-normal uppercase text-white">
                CONTACT <span className="text-violet-400">ME</span>
            </h1>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 lg:w-1/2">
                <div className="lg:flex gap-5">
                    <input 
                        className="w-full lg:my-3 my-3 rounded-lg bg-stone-900 p-4 border-2 border-orange-300 Contact_glow text-xl text-white" 
                        placeholder="Ingresa tu nombre" 
                        type="text" 
                        name="user_name"
                    />
                    <input 
                        className="w-full lg:my-3 my-3 rounded-lg bg-stone-900 p-4 border-2 border-orange-300 Contact_glow text-xl text-white" 
                        placeholder="Ingresa tu correo" 
                        type="email" 
                        name="user_email"
                    />
                </div>
                <textarea 
                    className="w-full my-3 rounded-lg bg-stone-900 p-4 border-2 border-orange-300 Contact_glow text-xl text-white" 
                    placeholder="Escribe tu mensaje..." 
                    name="message" 
                    cols="30" 
                    rows="10"
                ></textarea>
                <button 
                    className="Contact_glow shadow-xl hover:shadow-yellow-700/50 text-black border-2 border-orange-300 bg-orange-300 hover:bg-orange-200 rounded-lg py-4 px-8 my-4 uppercase relative overflow-hidden Contact_glow text-xl font-semibold mb-8" 
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Enviando...' : 'ENVIAR'}
                </button>
            </form>
        </div>
    );
};

export default ContactMe;

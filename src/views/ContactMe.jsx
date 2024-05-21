import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';
import AOS from 'aos';

const ContactMe = () => {

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750,
        })
    },[])

    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_ipavfll', 'template_9h76r9j', form.current, 'BkrmS7vVa5HO-eSbM')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    alert('Excelente, se ha enviado tu mensaje. Gracias por comunicarte con Ruth de León');
                    form.current.reset();
                    setFormData({ user_name: '', user_email: '', message: '' });
                    setLoading(false);
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    alert(`Ocurrió un error al enviar tu mensaje, prueba de nuevo. ${error.text}`);
                    setLoading(false);
                }
            );
    };

    const isFormValid = () => {
        return formData.user_name && formData.user_email && formData.message;
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
                        value={formData.user_name}
                        onChange={handleInputChange}
                    />
                    <input 
                        className="w-full lg:my-3 my-3 rounded-lg bg-stone-900 p-4 border-2 border-orange-300 Contact_glow text-xl text-white" 
                        placeholder="Ingresa tu correo" 
                        type="email" 
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleInputChange}
                    />
                </div>
                <textarea 
                    className="w-full my-3 rounded-lg bg-stone-900 p-4 border-2 border-orange-300 Contact_glow text-xl text-white" 
                    placeholder="Escribe tu mensaje..." 
                    name="message" 
                    cols="30" 
                    rows="10"
                    value={formData.message}
                    onChange={handleInputChange}
                ></textarea>
                <button 
                    className="Contact_glow shadow-xl hover:shadow-yellow-700/50 text-black border-2 border-orange-300 bg-orange-300 hover:bg-orange-200 rounded-lg py-4 px-8 my-4 uppercase relative overflow-hidden Contact_glow text-xl font-semibold mb-8" 
                    type="submit"
                    disabled={loading || !isFormValid()}
                >
                    {loading ? 'Enviando...' : 'ENVIAR'}
                </button>
            </form>
        </div>
    );
};

export default ContactMe;
import React, { useState, useEffect } from 'react';
import Nav from '@components/Nav';
import Banner from '@components/Banner'; 
import AboutMe from '@views/AboutMe';
import Academic from '@views/Academic';
import Knowledge from '@views/Knowledge';
import Projects from '@views/Projects';
import Contact from '@views/ContactMe';
import ScrollButton from '@components/ScrollButton'; 
import Footer from '@components/Footer'; 
import { Hourglass } from 'react-loader-spinner'; 

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {
        loading ?
        <div className='bg-stone-950 h-screen flex justify-center items-center'>
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['rgb(109 40 217)', 'rgb(254 215 170)']}
          />
        </div>
        :
        <div className="bg-stone-950 font-serif">
          <Nav />
          <Banner />
          <AboutMe />
          <Academic />
          <Knowledge />
          <Projects />
          <Contact />
          <ScrollButton />
          <Footer />
        </div>
      }
    </>
  );
}

export default App;

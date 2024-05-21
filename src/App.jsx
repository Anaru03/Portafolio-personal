import Nav from '@components/Nav';
import Banner from '@components/Banner'; 
import AboutMe from '@views/AboutMe';
import Academic from '@views/Academic';
import Knowledge from '@views/Knowledge';
import Projects from '@views/Projects';
import Contact from '@views/ContactMe';
import ScrollButton from '@components/ScrollButton'; 
import Footer from '@components/Footer'; 

function App() {
  return (
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
  );
}

export default App;

import Nav from '@components/Nav';
import Banner from '@components/Banner'; 
import AboutMe from '@views/AboutMe';
import Academic from '@views/Academic';
import Knowledge from '@views/Knowledge';
import Projects from '@views/Projects';
import Contact from '@views/ContactMe';

function App() {
  return (
    <div className="bg-stone-950">
      <Nav />
      <Banner />
      <AboutMe />
      <Academic />
      <Knowledge />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

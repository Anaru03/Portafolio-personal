import Nav from '@components/Nav';
import Banner from '@components/Banner'; 
import AboutMe from '@views/AboutMe';

function App() {
  return (
    <div className="bg-stone-950">
      <Nav />
      <Banner />
      <AboutMe />
    </div>
  );
}

export default App;

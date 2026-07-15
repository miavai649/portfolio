import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';

function App() {
  return (
    <main className='relative bg-white dark:bg-black text-gray-900 dark:text-gray-100 selection:bg-primary/30'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* More sections will follow */}
    </main>
  );
}

export default App;

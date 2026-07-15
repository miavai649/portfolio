import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';

function App() {
  return (
    <main className='relative bg-white dark:bg-black text-gray-900 dark:text-gray-100 selection:bg-primary/30'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      {/* More sections will follow */}
    </main>
  );
}

export default App;

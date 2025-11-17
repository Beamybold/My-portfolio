import me from '../assets/me.jpg';


function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src="/motion-bg.mp4" type="video/mp4" />
      </video>

      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10">
        <img src={me} alt="Adebimpe AI" className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500" />
        <h1 className="text-4xl font-bold mt-4">Hi, I'm Adebimpe – AI Developer</h1>
        <p className="mt-2 text-lg">Solving real-world problems timely with intelligent solutions adopting creativity and precision.</p>
      </div>
    </section>
  );
}

export default Home;

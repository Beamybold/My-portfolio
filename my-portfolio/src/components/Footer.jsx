function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-purple-100 text-gray-600">
      

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
     
        <div>
          <h3 className="text-black text-2xl font-bold">AdebimpeAI</h3>
          <p className="mt-3 text-sm">
            Solving problems with intelligent products using AI.
          </p>
          <p className="mt-2 text-sm">Abeokuta, Nigeria</p>
        </div>

        
        <div>
          <h4 className="text-black  font-semibold mb-3">Quick links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-YELLOW-4 transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="/skills" className="hover:text-white transition">Skills</a></li>
            <li><a href="/experience" className="hover:text-white transition">Experience</a></li>
            <li><a href="/portfolio" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="/testimonials" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><span className="text-gray-400">Email:</span> adebimpe.ai@portfolio.dev</li>
            <li><span className="text-gray-400">Availability:</span> Open to roles and collaborations</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-3">Social</h4>
          <div className="flex items-center gap-3">
            <a href="https://github.com/adebimpeai" className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition text-sm">GitHub</a>
            <a href="https://linkedin.com/in/adebimpeai" className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition text-sm">LinkedIn</a>
            <a href="https://twitter.com/adebimpeai" className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition text-sm">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs">
            © {year} AdebimpeAI. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded transition"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

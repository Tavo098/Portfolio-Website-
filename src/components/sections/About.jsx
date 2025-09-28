export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">About Me</h2>
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 ">
            I’m Gustavo Pajuelo, an NJIT graduate who loves building web apps and exploring data. I enjoy working with React, Django, and databases,
            and I’m always curious to learn new skills and tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3>Frontend</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

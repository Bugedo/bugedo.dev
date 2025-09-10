'use client';

export default function Education() {
  return (
    <section className="relative flex flex-col justify-start sm:justify-center items-center py-16 sm:py-20 px-4 text-white min-h-[80vh] sm:min-h-[100svh] mt-48 sm:mt-20">
      <h2 id="education" className="text-5xl sm:text-6xl font-bold mb-8 text-center">
        Education
      </h2>
      <div className="grid grid-cols-1 gap-6 max-w-5xl z-10">
        {/* freeCodeCamp */}
        <div className="bg-[#1f1f1f] rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center bg-[#1a1a1a] h-24">
            <h3 className="text-2xl font-bold text-center">
              Certified Full Stack Developer Curriculum
            </h3>
            <p className="text-gray-400 text-base">2025 - Present</p>
          </div>
          <div className="p-5">
            <h4 className="text-lg font-semibold text-white">freeCodeCamp</h4>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Currently completing freeCodeCamp’s rigorous Full Stack Developer Curriculum, covering
              everything from responsive design and front‑end frameworks to API development and
              database management. This certification is strengthening my ability to build robust,
              scalable applications.
            </p>
          </div>
        </div>

        {/* The Odin Project */}
        <div className="bg-[#1f1f1f] rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center bg-[#1a1a1a] h-24">
            <h3 className="text-2xl font-bold text-center">Full Stack JavaScript Path</h3>
            <p className="text-gray-400 text-base">2025</p>
          </div>
          <div className="p-5">
            <h4 className="text-lg font-semibold text-white">The Odin Project</h4>
            <p className="text-gray-300 mt-4 leading-relaxed">
              I completed The Odin Project’s Full Stack JavaScript path to gain hands‑on experience
              building dynamic web applications. The course sharpened my skills in JavaScript,
              Node.js, and modern front‑end practices while emphasizing project‑based learning.
            </p>
          </div>
        </div>

        {/* UNC */}
        <div className="bg-[#1f1f1f] rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center bg-[#1a1a1a] h-24">
            <h3 className="text-2xl font-bold text-center">Attended Systems Engineering</h3>
            <p className="text-gray-400 text-base">3 years completed (2013-2016)</p>
          </div>
          <div className="p-5">
            <h4 className="text-lg font-semibold text-white">
              National University of Córdoba, Argentina
            </h4>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Studied Systems Engineering for three years, building a foundation in algorithms,
              mathematics, and software development. While I transitioned into other fields later,
              this early experience sparked my curiosity for technology and problem‑solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

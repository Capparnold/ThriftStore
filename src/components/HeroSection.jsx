export default function HeroSection() {
  return (
   
    
   
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-peach-100 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Image */}
      <img
        src="/img1.webp" // Replace with your actual image path, e.g., /assets/img1.webp
        alt="ThriftStore Collection"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          Style Meets <span className="text-peach-300">Sustainability</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Redefining fashion through vintage finds and timeless thrift pieces —  
          because great style doesn’t have to cost the planet.
        </p>
        <button className="px-10 py-4 bg-peach-400 text-black font-semibold text-lg rounded-full shadow-lg hover:bg-peach-300 transition-transform transform hover:scale-105">
          Explore Collection
        </button>
      </div>

      {/* Decorative gradient bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
}
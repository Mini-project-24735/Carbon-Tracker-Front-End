import bg from './bg.png';
import jp from './jp.jpg';
import logo from './logo.png';
const About=()=>{
    const images = [
        jp,bg,logo
    ];
    return(
        <div className="max-w-5xl mx-auto px-4 py-12 text-green-500 font-sans">
            {/* Hero Section */}
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                    Making the Invisible Visible
                </h1>
                <p className="text-xl md:text-2xl text-green-400 max-w-3xl mx-auto leading-relaxed">
                    Track, understand, and reduce your digital carbon footprint in real-time.
                </p>
            </header>

            {/* The Problem Section */}
            <section className="text-center mb-20 px-4 md:px-12">
                <h2 className="text-3xl font-bold mb-6 italic">The Hidden Cost of Our Digital Lives</h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                    We stream, we search, and we generate AI content every single day. While the internet feels weightless, 
                    it relies on a massive, energy-intensive physical infrastructure. Every email sent, every 4K video 
                    streamed, and every AI prompt carries a carbon cost. We built this tracker because 
                    <span className="text-green-400 font-semibold"> you can't improve what you don't measure.</span>
                </p>
            </section>

            {/* Features/Empowerment Section */}
            <section className="bg-gradient-to-br from-green-500 to-emerald-70 border border-none  text-white rounded-2xl p-8 md:p-12 mb-20">
                <h2 className="text-center text-3xl font-bold mb-10">Empowering Sustainable Browsing</h2>
                <ul className="space-y-8 max-w-4xl mx-auto">
                    <li className="flex gap-4">
                        <span className="text-2xl"></span>
                        <div>
                            <h4 className="text-xl font-bold mb-1">Real-Time Tracking</h4>
                            <p className="text-lg text-white font-semibold">Our background extension silently calculates the estimated emissions of your daily web browsing and screen time without invading your privacy.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-2xl"></span>
                        <div>
                            <h4 className="text-xl font-bold mb-1">AI & Heavy-Compute Monitoring</h4>
                            <p className="text-lg text-white font-semibold">Not all tasks are created equal. We provide specialized metrics to show the true cost of compute-heavy tasks like AI image generation and LLM queries.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-2xl"></span>
                        <div>
                            <h4 className="text-xl font-bold mb-1">The Eco-Simulator</h4>
                            <p className="text-lg text-white font-semibold">A safe sandbox to experiment with your habits. Discover exactly how much CO₂ you could save by tweaking streaming resolution or switching to dark mode.</p>
                        </div>
                    </li>
                </ul>
            </section>

            {/* Mission & Team Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-20 text-center md:text-left">
                <section>
                    <h3 className="text-2xl font-bold mb-4">Our Mission: A Greener Web</h3>
                    <p className="text-lg leading-relaxed text-gray-300">
                        Technology should move humanity forward, not set our planet backward. We empower users to make 
                        mindful, sustainable choices online. Small adjustments to digital routines create massive collective impact.
                    </p>
                </section>
                <section>
                    <h3 className="text-2xl font-bold mb-4">The Tech Behind the Tool</h3>
                    <p className="text-lg leading-relaxed text-gray-300">
                        Built with a modern **React** frontend and a robust analytical engine, this platform serves 
                        as a bridge between complex data analytics and environmental responsibility.
                    </p>
                </section>
            </div>
            <div className="mt-16 pb-12">
                <h3 className="text-center text-green-500 text-xl font-bold mb-8 uppercase tracking-widest 0">
                    Our Team
                </h3>

                {/* The Mask Container: Creates the "fade" effect at the edges */}
                <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-black/20 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-black/20 after:to-transparent">
                    
                    {/* The Scrolling Row */}
                    <div className="flex w-max animate-scroll  group-hover:pause-animation">
                        {/* First set of images */}
                        {[...images, ...images].map((src, index) => (
                            <div key={index} className="flex-shrink-0 px-10">
                                <img 
                                    src={src} 
                                    alt={`Logo ${index}`} 
                                   className="relative z-10 h-80 w-auto object-contain  opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                /* Optional: Pause on hover if you remove pointer-events-none */
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}} />
        </div>
        
    );
};

export default About;
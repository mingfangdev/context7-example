import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20"></div>
        
        <div className="relative px-6 py-24 mx-auto max-w-7xl lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tailwind CSS
              </span>
              <br />
              <span className="text-white/90">Feature Demo</span>
            </h1>
                         <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
               Explore the power of modern CSS with Tailwind&apos;s advanced features including 
               3D transforms, complex animations, gradient interpolation, and cutting-edge utilities.
             </p>
          </div>
        </div>
      </div>

      {/* Demo Examples */}
      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="space-y-32">
          
          {/* Example 1: 3D Card Gallery with Advanced Transforms */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">3D Transform Gallery</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Showcasing 3D transforms, perspective, and complex hover animations with modern CSS features.
              </p>
            </div>
            
            <div className="perspective-[1000px] grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - Rotating Cube */}
              <div className="group relative h-64 transform-3d transition-transform duration-700 hover:rotate-y-180">
                <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl backface-hidden">
                  <div className="p-6 h-full flex flex-col justify-center items-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">3D Rotation</h3>
                    <p className="text-center text-sm opacity-90">Hover to flip</p>
                  </div>
                </div>
                <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 shadow-2xl backface-hidden rotate-y-180">
                  <div className="p-6 h-full flex flex-col justify-center items-center text-white">
                    <div className="text-4xl mb-4">🎨</div>
                    <h3 className="text-xl font-bold">Back Side</h3>
                    <p className="text-center text-sm opacity-90">3D transforms in action!</p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Floating Animation */}
              <div className="group relative">
                                 <div className="h-64 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-3 animate-float">
                  <div className="p-6 h-full flex flex-col justify-center items-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 transform -skew-y-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 animate-spin-slow">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Floating Card</h3>
                      <p className="text-center text-sm opacity-90">Complex animations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Morphing Shape */}
              <div className="group relative h-64">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-2xl transform transition-all duration-1000 group-hover:rounded-full group-hover:scale-110">
                  <div className="p-6 h-full flex flex-col justify-center items-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 transform transition-transform duration-1000 group-hover:rotate-180 group-hover:scale-125">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Morphing</h3>
                    <p className="text-center text-sm opacity-90">Shape transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Example 2: Advanced Gradient Showcase */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Advanced Gradient System</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Exploring conic gradients, color interpolation modes, and complex gradient compositions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Conic Gradients */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Conic Gradients</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square rounded-full bg-conic from-blue-600 to-sky-400 to-50% shadow-lg"></div>
                  <div className="aspect-square rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600 shadow-lg"></div>
                  <div className="aspect-square rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 shadow-lg"></div>
                </div>
                
                {/* Radial Gradients */}
                <h3 className="text-xl font-semibold text-white mt-8">Radial Gradients</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-lg bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% shadow-lg"></div>
                  <div className="aspect-square rounded-lg bg-radial from-pink-500 via-red-500 to-yellow-500 shadow-lg"></div>
                </div>
              </div>

              {/* Color Interpolation */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Color Interpolation Modes</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-gray-400 w-16">srgb</span>
                    <div className="flex-1 h-8 rounded bg-linear-to-r/srgb from-indigo-500 to-teal-400"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-gray-400 w-16">hsl</span>
                    <div className="flex-1 h-8 rounded bg-linear-to-r/hsl from-indigo-500 to-teal-400"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-gray-400 w-16">oklab</span>
                    <div className="flex-1 h-8 rounded bg-linear-to-r/oklab from-indigo-500 to-teal-400"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-gray-400 w-16">oklch</span>
                    <div className="flex-1 h-8 rounded bg-linear-to-r/oklch from-indigo-500 to-teal-400"></div>
                  </div>
                </div>

                {/* Angled Gradients */}
                <h3 className="text-xl font-semibold text-white mt-8">Angled Gradients</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-lg bg-linear-45 from-indigo-500 via-purple-500 to-pink-500 shadow-lg"></div>
                  <div className="aspect-square rounded-lg bg-linear-135 from-emerald-500 via-blue-500 to-purple-500 shadow-lg"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Example 3: Interactive Animation Playground */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Interactive Animation Playground</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Complex keyframe animations, state-driven interactions, and performance-optimized effects.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Bouncing Loader */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-6 text-center">Bouncing Loader</h3>
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce"></div>
                </div>
              </div>

              {/* Spinning Elements */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-6 text-center">Multi-Speed Rotation</h3>
                <div className="flex justify-center items-center space-x-4">
                  <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin [animation-duration:2s]"></div>
                  <div className="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full animate-spin [animation-duration:3s]"></div>
                </div>
              </div>

              {/* Pulsing Hearts */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-6 text-center">Pulsing Effects</h3>
                <div className="flex justify-center items-center space-x-4">
                  <div className="text-2xl animate-pulse text-red-500">❤️</div>
                  <div className="text-2xl animate-pulse text-pink-500 [animation-delay:0.5s]">💖</div>
                  <div className="text-2xl animate-pulse text-purple-500 [animation-delay:1s]">💜</div>
                </div>
              </div>
            </div>

            {/* Complex Interactive Element */}
            <div className="mt-12">
              <div className="group relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 skew-x-12"></div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Interactive Showcase</h3>
                  <p className="text-white/80 mb-6">Hover to see multiple animations working together</p>
                  
                  <div className="flex justify-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-700">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center transform group-hover:scale-125 transition-transform duration-500">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-32 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <span className="text-gray-300">Built with</span>
            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tailwind CSS v4
            </span>
            <span className="text-gray-300">•</span>
            <Link 
              href="https://tailwindcss.com" 
              target="_blank"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>


    </main>
  );
}

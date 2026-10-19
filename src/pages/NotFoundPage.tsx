import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-[#080808] text-white flex flex-col justify-between p-6 sm:p-12 md:p-16 select-none relative overflow-hidden mt-[76px] sm:mt-[80px]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(230,43,30,0.09),transparent_70%)] pointer-events-none" />

      {/* Monumental Watermarks */}
      <div className="absolute top-12 -left-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.04]">
        <span className="font-display font-black text-[22vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          404
        </span>
      </div>
      <div className="absolute bottom-12 -right-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.03]">
        <span className="font-display font-black text-[18vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          VOID
        </span>
      </div>

      {/* Top Header Bar */}
      <div className="flex items-center justify-between font-subtext text-xs border-b border-white/[0.08] pb-4 relative z-10">
        <div className="flex items-baseline gap-1">
          <span className="font-display font-black text-2xl text-[#E62B1E]">TEDx</span>
          <span className="font-display font-black text-2xl text-white">RVITM</span>
        </div>
        <span className="text-white/40 uppercase tracking-widest text-[10px]">Transmission Lost • 404</span>
      </div>

      {/* Center Message */}
      <div className="max-w-2xl mx-auto my-auto text-center space-y-6 relative z-10 py-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-subtext text-xs text-[#E62B1E] uppercase font-bold tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#E62B1E] animate-pulse" />
          <span>SIGNAL DISRUPTED</span>
        </div>

        <h1 className="font-heading font-black text-7xl sm:text-9xl tracking-tight text-white leading-none">
          404
        </h1>
        <h2 className="font-subheading font-bold text-2xl sm:text-3xl text-white/95 uppercase tracking-tight">
          This transmission could not be found.
        </h2>
        <p className="font-text text-sm sm:text-base text-white/60 leading-relaxed max-w-md mx-auto font-light">
          The coordinate you requested does not exist or has been relocated within the conference directory.
        </p>

        <div className="pt-6 flex justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-3.5 rounded-full bg-[#E62B1E] text-white hover:bg-white hover:text-black transition-all font-subtext text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-900/30"
          >
            Return to Homepage ↗
          </Link>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="flex items-center justify-between font-subtext text-xs text-white/30 border-t border-white/[0.08] pt-4 relative z-10">
        <span>TEDxRVITM 2026</span>
        <span>Operated under license from TED</span>
      </div>
    </main>
  );
};

export default NotFoundPage;


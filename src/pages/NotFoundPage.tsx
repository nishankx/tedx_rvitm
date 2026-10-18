import React from 'react';
import { BrutalButton } from '../components/ui/BrutalButton';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#080808] text-white flex flex-col justify-between p-8 sm:p-16 select-none relative">
      <div className="flex items-center justify-between font-mono text-xs border-b border-white/[0.08] pb-4">
        <div className="flex items-baseline gap-1">
          <span className="font-display font-black text-2xl text-[#E62B1E]">TEDx</span>
          <span className="font-display font-bold text-2xl text-white">RVITM</span>
        </div>
        <span className="text-white/40">Page Not Found</span>
      </div>

      <div className="max-w-2xl mx-auto my-auto text-center space-y-6">
        <span className="text-xs font-mono tracking-widest text-[#E62B1E] uppercase">
          Error 404
        </span>
        <h1 className="font-display font-bold text-6xl sm:text-8xl tracking-tight text-white">
          404
        </h1>
        <h2 className="font-display font-medium text-2xl sm:text-3xl text-white/90">
          This transmission could not be found.
        </h2>
        <p className="font-body text-sm text-white/60 leading-relaxed font-light max-w-md mx-auto">
          The coordinate you requested does not exist or has been relocated within the conference directory.
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <BrutalButton href="/" variant="primary" size="md">
            Return to Homepage ↗
          </BrutalButton>
        </div>
      </div>

      <div className="flex items-center justify-between font-mono text-xs text-white/30 border-t border-white/[0.08] pt-4">
        <span>TEDxRVITM 2026</span>
        <span>Operated under license from TED</span>
      </div>
    </div>
  );
};

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { BrutalButton } from '../components/ui/BrutalButton';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const CURATOR_EMAIL = 'rvit25bcs118.rvitm@rvei.edu.in';

export const NewsletterSection: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Dynamic scroll-controlled sequence: header motion and card elevation, tilt, and scale
  const headerY = useTransform(scrollYProgress, [0, 1], [50, -25]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.35, 1, 1, 0.4]);

  const cardY = useTransform(scrollYProgress, [0, 1], [50, -35]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.01, 0.97]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [-0.8, 0.8]);

  // Sideways watermarks movement
  const watermarkX1 = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const watermarkX2 = useTransform(scrollYProgress, [0, 1], [140, -140]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const subject = `[TEDxRVITM Curator Transmission] Inquiry from ${data.fullName}`;

    // Send email directly to rvit25bcs118.rvitm@rvei.edu.in via FormSubmit endpoint
    try {
      await fetch(`https://formsubmit.co/ajax/${CURATOR_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          message: data.message,
          _subject: subject,
          _replyto: data.email,
        }),
      });
    } catch (e) {
      console.warn('FormSubmit network notice:', e);
    }

    setIsSuccess(true);
    reset();
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-24 sm:py-32 md:py-36 px-4 sm:px-6 md:px-12 overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#E62B1E]/[0.04] rounded-full blur-[170px] pointer-events-none -z-0" />

      {/* ── BACKGROUND TYPOGRAPHY (MONUMENTAL WATERMARKS WITH SIDEWAYS MOTION) ── */}
      <motion.div
        style={{ x: watermarkX1 }}
        className="absolute top-8 -left-10 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.03]"
      >
        <span className="font-display font-black text-[16vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          CONNECT
        </span>
      </motion.div>

      <motion.div
        style={{ x: watermarkX2 }}
        className="absolute bottom-6 -right-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.025]"
      >
        <span className="font-display font-black text-[13vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          DISPATCH
        </span>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-2 sm:space-y-3"
        >
          <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase block font-semibold">
            CONNECT
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl tracking-tight text-white uppercase">
            Connect with the Curators
          </h2>
          <p className="font-text text-sm sm:text-base text-white/60 max-w-md mx-auto font-light">
            Stay informed with official talk releases, drop schedules, and salon invitations.
          </p>
        </motion.div>

        <motion.div
          style={{
            y: cardY,
            scale: cardScale,
            rotate: cardRotate,
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="p-5 sm:p-8 md:p-12 rounded-2xl bg-[#111111] border border-white/[0.08]"
        >
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E62B1E]/10 border border-[#E62B1E]/30 text-[#E62B1E] text-xs font-subtext font-bold uppercase tracking-wider">
                <span>✓</span>
                <span>Transmission Dispatched</span>
              </div>
              <h3 className="font-subheading font-bold text-2xl sm:text-3xl text-white">
                Inquiry Routed to Curators
              </h3>
              <p className="font-text text-sm text-white/70 font-light max-w-md mx-auto leading-relaxed">
                Your transmission has been forwarded directly to{' '}
                <strong className="text-white font-mono">{CURATOR_EMAIL}</strong>. A member of the curatorial team will review your message and follow up promptly.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 rounded-full bg-[#E62B1E] text-white font-subtext text-xs uppercase tracking-wider font-bold hover:bg-[#FF3324] transition-all cursor-pointer shadow-glow-red"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Direct email destination indicator */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.08] text-xs font-subtext">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E62B1E] animate-pulse" />
                  <span className="text-white/50 uppercase tracking-widest text-[11px]">Direct Transmission To:</span>
                </div>
                <a
                  href={`mailto:${CURATOR_EMAIL}`}
                  className="text-[#E62B1E] hover:underline font-mono text-[11px] font-bold tracking-wider"
                >
                  {CURATOR_EMAIL}
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-subtext text-xs text-white/70 uppercase tracking-wider block">
                    Full Name
                  </label>
                  <input
                    {...register('fullName')}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white placeholder-white/20 font-text text-sm focus:border-[#E62B1E] focus:outline-none transition-colors"
                  />
                  {errors.fullName && (
                    <span className="text-[#E62B1E] font-subtext text-xs block">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="font-subtext text-xs text-white/70 uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="ada@domain.org"
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white placeholder-white/20 font-text text-sm focus:border-[#E62B1E] focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <span className="text-[#E62B1E] font-subtext text-xs block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-subtext text-xs text-white/70 uppercase tracking-wider block">
                  Inquiry / Perspective
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Share ideas, speaker proposals, or press requests..."
                  className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white placeholder-white/20 font-text text-sm focus:border-[#E62B1E] focus:outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <span className="text-[#E62B1E] font-subtext text-xs block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <div className="pt-2 flex justify-end">
                <BrutalButton
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Transmitting...' : 'Send Message ↗'}
                </BrutalButton>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;

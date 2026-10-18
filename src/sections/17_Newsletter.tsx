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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = () => {
    setIsSuccess(true);
    reset();
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 border-b border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center space-y-2 sm:space-y-3"
        >
          <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
            14 / CONNECT
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight text-white">
            Connect with the Curators
          </h2>
          <p className="font-body text-xs sm:text-sm text-white/50 max-w-md mx-auto font-light">
            Stay informed with official talk releases, drop schedules, and salon invitations.
          </p>
        </motion.div>

        <motion.div
          style={{
            y: cardY,
            scale: cardScale,
            rotate: cardRotate,
          }}
          className="p-5 sm:p-8 md:p-12 rounded-2xl bg-[#111111] border border-white/[0.08]"
        >
          {isSuccess ? (
            <div className="text-center py-8 space-y-3">
              <h3 className="font-display font-medium text-2xl text-white">
                Transmission Received
              </h3>
              <p className="font-body text-xs text-white/60 font-light">
                Thank you for reaching out. We will respond promptly.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="font-mono text-xs text-[#E62B1E] underline pt-2 cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-white/70 uppercase tracking-wider block">
                    Full Name
                  </label>
                  <input
                    {...register('fullName')}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white placeholder-white/20 font-body text-sm focus:border-[#E62B1E] focus:outline-none transition-colors"
                  />
                  {errors.fullName && (
                    <span className="text-[#E62B1E] font-mono text-xs block">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-white/70 uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="ada@domain.org"
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white placeholder-white/20 font-body text-sm focus:border-[#E62B1E] focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <span className="text-[#E62B1E] font-mono text-xs block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-white/70 uppercase tracking-wider block">
                  Inquiry / Perspective
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Share ideas, speaker proposals, or press requests..."
                  className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white placeholder-white/20 font-body text-sm focus:border-[#E62B1E] focus:outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <span className="text-[#E62B1E] font-mono text-xs block">
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

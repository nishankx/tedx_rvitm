import React, { useState } from 'react';
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
    <section id="contact" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
            14 / CONNECT
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white">
            Connect with the Curators
          </h2>
          <p className="font-body text-sm text-white/50 max-w-md mx-auto font-light">
            Stay informed with official talk releases, drop schedules, and salon invitations.
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-2xl bg-[#111111] border border-white/[0.08]">
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
                className="font-mono text-xs text-[#E62B1E] underline pt-2"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-white/50 uppercase block">
                    Full Name *
                  </label>
                  <input
                    {...register('fullName')}
                    type="text"
                    placeholder="e.g. Vikramaditya Rao"
                    className="w-full p-3.5 rounded-lg bg-black/60 border border-white/15 focus:border-[#E62B1E] text-white focus:outline-none font-sans text-sm"
                  />
                  {errors.fullName && (
                    <span className="text-[#E62B1E] font-mono text-xs block">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-white/50 uppercase block">
                    Email Coordinate *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="v.rao@domain.com"
                    className="w-full p-3.5 rounded-lg bg-black/60 border border-white/15 focus:border-[#E62B1E] text-white focus:outline-none font-sans text-sm"
                  />
                  {errors.email && (
                    <span className="text-[#E62B1E] font-mono text-xs block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-white/50 uppercase block">
                  Inquiry / Message *
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Your message or question for our team..."
                  className="w-full p-3.5 rounded-lg bg-black/60 border border-white/15 focus:border-[#E62B1E] text-white focus:outline-none font-sans text-sm"
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
        </div>
      </div>
    </section>
  );
};

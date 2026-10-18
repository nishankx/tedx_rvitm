import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TICKETS, COMPARISON_BENEFITS } from '../data/content';
import { SpecularButton } from '../components/ui/SpecularButton';

export const PassesSection: React.FC = () => {
  const [showCompareTable, setShowCompareTable] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  return (
    <section id="passes" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
              06 / ACCESS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white">
              Official Passes
            </h2>
          </div>

          <button
            onClick={() => setShowCompareTable(!showCompareTable)}
            className="px-5 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase border border-white/20 hover:border-white text-white transition-all"
          >
            {showCompareTable ? 'Hide Comparison' : 'Compare Benefits Table ↗'}
          </button>
        </div>

        {/* Benefits Comparison Table */}
        <AnimatePresence>
          {showCompareTable && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="p-8 rounded-2xl bg-[#111111] border border-white/[0.08] font-mono text-xs overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-white/50">
                      <th className="p-4">BENEFIT SPECIFICATION</th>
                      <th className="p-4">STUDENT</th>
                      <th className="p-4">GENERAL</th>
                      <th className="p-4 text-[#E62B1E]">VIP</th>
                      <th className="p-4">GROUP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    {COMPARISON_BENEFITS.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="p-4 text-white font-medium">{row.benefit}</td>
                        <td className="p-4 text-white/70">{row.student === true ? 'Included' : row.student === false ? '—' : row.student}</td>
                        <td className="p-4 text-white/70">{row.general === true ? 'Included' : row.general === false ? '—' : row.general}</td>
                        <td className="p-4 text-[#E62B1E] font-medium">{row.vip === true ? 'Full Access' : row.vip}</td>
                        <td className="p-4 text-white/70">{row.group === true ? 'Included' : row.group === false ? '—' : row.group}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Clean Ticket Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TICKETS.map((ticket) => {
            const isSoldOut = ticket.status === 'sold_out';
            const isScholarship = ticket.type === 'Scholarship';

            return (
              <div
                key={ticket.id}
                className="relative p-8 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-8"
              >
                {ticket.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#E62B1E]/15 border border-[#E62B1E]/30 text-[#E62B1E] font-mono text-[10px] tracking-wider uppercase font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                      {ticket.code}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white">
                      {ticket.name}
                    </h3>
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="font-display font-bold text-3xl sm:text-4xl text-white">
                        {ticket.price}
                      </span>
                      {ticket.originalPrice && (
                        <span className="font-mono text-xs line-through text-white/40">
                          {ticket.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="font-body text-xs text-white/60 leading-relaxed font-light">
                    {ticket.description}
                  </p>

                  <div className="pt-4 border-t border-white/[0.06] space-y-2.5 font-mono text-xs text-white/80">
                    {ticket.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-[#E62B1E]">✓</span>
                        <span className="font-light">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.08]">
                  <SpecularButton
                    onClick={() => setSelectedTicket(ticket.name)}
                    variant={ticket.popular ? 'primary' : 'outline'}
                    size="md"
                    className="w-full"
                    disabled={isSoldOut}
                  >
                    {isScholarship ? 'Apply for Waiver ↗' : 'Reserve Pass ↗'}
                  </SpecularButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Ticket Dialog */}
        {selectedTicket && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-md">
            <div className="bg-[#141414] border border-white/20 p-8 rounded-2xl max-w-md w-full text-center space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">
                {selectedTicket}
              </h3>
              <p className="font-body text-xs text-white/70 leading-relaxed font-light">
                Proceeding to secure checkout gateway. Please have your verification credentials ready.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => alert('Razorpay checkout initialized for ' + selectedTicket)}
                  className="w-full py-3 rounded-full bg-[#E62B1E] text-white font-mono text-xs font-semibold tracking-wider uppercase shadow-glow-red hover:bg-[#FF3324] transition-all"
                >
                  Proceed to Payment
                </button>
                <button
                  onClick={() => setSelectedTicket(null)}
                  className="font-mono text-xs text-white/40 hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

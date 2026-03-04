import { motion } from "motion/react";
import { ShieldCheck, GraduationCap } from "lucide-react";

export default function Collaboration() {
  return (
    <section id="collaboration" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold mb-4"
          >
            Partnership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Official Collaboration <span className="text-brand">Partner</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Bekerja sama dengan institusi pendidikan terkemuka untuk menghadirkan solusi teknologi masa depan.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[50px] shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group transition-all duration-500"
          >
            {/* Logo Container */}
            <div className="relative mb-10">
              <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-brand/30 transition-colors duration-500 overflow-hidden p-4">
                {/* Stylized Logo Representation based on user upload */}
                <div className="flex flex-col items-center">
                  <span className="text-6xl font-serif italic font-black text-slate-900 group-hover:text-brand transition-colors leading-none">S</span>
                  <div className="flex gap-1 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <div className="w-1.5 h-1.5 rounded-full bg-brand/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-brand/30" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shadow-lg">
                <ShieldCheck size={20} />
              </div>
            </div>
            
            <h3 className="text-3xl font-serif italic font-black tracking-tight text-slate-900 mb-2 group-hover:text-brand transition-colors">
              SMART SCHOOL
            </h3>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mb-8">
              Educational Technology Partner
            </p>
            
            <div className="w-full h-px bg-slate-100 mb-8" />
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 text-brand text-xs font-bold border border-brand/10">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                Active Partnership
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                <GraduationCap size={16} />
                Smart School Indonesian
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


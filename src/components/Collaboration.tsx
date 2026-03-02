import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

export default function Collaboration() {
  return (
    <section id="collaboration" className="py-24 bg-brand/5 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 mb-4"
          >
            Official Collaboration Partner
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-brand mx-auto rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="max-w-md mx-auto bg-white p-10 rounded-[40px] shadow-xl shadow-brand/10 border border-brand/10 flex flex-col items-center text-center group transition-all duration-500"
        >
          <div className="w-20 h-20 rounded-3xl bg-brand/10 flex items-center justify-center mb-8 group-hover:bg-brand group-hover:text-white transition-colors duration-500">
            <ShieldCheck size={40} />
          </div>
          
          <h3 className="text-2xl font-black tracking-tight text-slate-900 mb-2 group-hover:text-brand transition-colors">
            SMART SCHOOL INDONESIAN
          </h3>
          <p className="text-slate-500 font-medium mb-6">
            Educational Technology Partner
          </p>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-400 text-xs font-bold border border-slate-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Active Partnership
          </div>
        </motion.div>
      </div>
    </section>
  );
}

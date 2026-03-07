import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Cpu, Laptop, Code } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Software Developer & IoT Enthusiast";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-10 opacity-10"
        >
          <Cpu size={120} className="text-brand" />
        </motion.div>
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-10 opacity-10"
        >
          <Laptop size={100} className="text-brand" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold mb-6"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Available for Collaboration
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              ARF<span className="text-brand">TECH</span> – Engineering the Future with <span className="text-brand italic">Innovation</span>
            </h1>
            
            <div className="h-8 mb-10">
              <p className="text-xl md:text-2xl text-slate-600 font-medium">
                {text}<span className="animate-pulse text-brand">|</span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-brand text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-brand/20 hover:bg-brand-dark transition-colors"
              >
                Lihat Project <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
              >
                Hubungi Saya
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-full max-w-2xl"
          >
            <div className="relative z-10 bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-slate-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
                    <Code className="text-brand" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg">System Arftech</h3>
                    <p className="text-sm text-slate-500">Engineering Solutions</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center text-brand">
                    <Cpu size={16} />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center text-brand">
                    <Laptop size={16} />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <span>Software Development</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      className="h-full bg-brand"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <span>IoT Systems</span>
                    <span>92%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-brand"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">Active Projects</p>
                  <p className="text-2xl font-bold text-brand">15+</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">IoT Devices</p>
                  <p className="text-2xl font-bold text-brand">20+</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

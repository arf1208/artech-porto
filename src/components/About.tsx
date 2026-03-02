import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Code2, Cpu, Rocket, Users } from "lucide-react";

const Counter = ({ value, label, icon: Icon }: { value: number, label: string, icon: any }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
    >
      <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
        <Icon className="text-brand" size={24} />
      </div>
      <h4 className="text-3xl font-bold text-slate-900 mb-1">{count}+</h4>
      <p className="text-sm text-slate-500 font-medium">{label}</p>
    </motion.div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold mb-6">
              About Me
            </div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Kreativitas di Bidang <span className="text-brand">Teknologi</span> & Inovasi Modern
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              ARTECH adalah individu kreatif di bidang teknologi yang berfokus pada pengembangan software sederhana hingga menengah serta pengembangan project Internet of Things (IoT). Memiliki semangat inovasi dan berorientasi pada solusi teknologi modern.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                  <Code2 className="text-brand" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Software Dev</h4>
                  <p className="text-sm text-slate-500 italic">Web & Desktop Solutions</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                  <Cpu className="text-brand" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">IoT Enthusiast</h4>
                  <p className="text-sm text-slate-500 italic">Hardware & Embedded Systems</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <Counter value={10} label="Project Software" icon={Code2} />
            <Counter value={5} label="Project IoT" icon={Cpu} />
            <Counter value={2} label="Tahun Pengalaman" icon={Rocket} />
            <Counter value={50} label="Happy Clients" icon={Users} />
          </div>
        </div>
      </div>
    </section>
  );
}

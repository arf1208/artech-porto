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
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative z-10 w-full max-w-[320px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="https://image2url.com/r2/default/files/1773516746218-64507771-f41f-441a-8c4d-3dd06fdd8402.jpeg" 
                alt="Profile ARFTECH" 
                className="w-full h-auto object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand rounded-full -z-10 blur-xl opacity-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold mb-6">
              About Me
            </div>
            
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-slate-900 mb-1">Arief Rahman</h3>
              <p className="text-brand font-semibold">Founder of ARFTECH</p>
            </div>

            <h2 className="text-2xl font-bold mb-6 leading-tight text-slate-800">
              Kreativitas di Bidang <span className="text-brand">Teknologi</span> & Inovasi Modern
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Halo! Saya adalah pengembang di balik <span className="text-brand">ARFTECH</span>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Saya adalah seorang pengembang yang berdedikasi untuk menciptakan solusi digital yang inovatif dan efisien. Fokus saya mencakup pengembangan perangkat lunak (Web & Desktop) serta integrasi sistem cerdas melalui Internet of Things (IoT).
              </p>
              <p className="text-slate-600 leading-relaxed">
                Dengan pengalaman dalam membangun berbagai aplikasi skala menengah, saya selalu berusaha menghadirkan teknologi yang tidak hanya fungsional, tetapi juga memberikan pengalaman pengguna yang optimal dan dampak positif yang nyata bagi penggunanya.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                  <Code2 className="text-brand" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Software Dev</h4>
                  <p className="text-xs text-slate-500">Web & Desktop</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                  <Cpu className="text-brand" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">IoT Enthusiast</h4>
                  <p className="text-xs text-slate-500">Embedded Systems</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Counter value={10} label="Project Software" icon={Code2} />
              <Counter value={5} label="Project IoT" icon={Cpu} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

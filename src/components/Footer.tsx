import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Instagram, ArrowUp, Music2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "Github" },
    { icon: <Linkedin size={20} />, href: "#", label: "Linkedin" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Music2 size={20} />, href: "#", label: "TikTok" },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter mb-6"
            >
              ARF<span className="text-brand">TECH</span>
            </motion.div>
            <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
              Engineering the Future with Innovation. Software Developer & IoT Enthusiast yang berdedikasi untuk menciptakan solusi teknologi modern.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Projects", "Collaboration", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-brand transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand/30" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 flex items-start gap-3">
                <span className="text-brand mt-1">•</span>
                Lamongan, Indonesia
              </li>
              <li className="text-slate-400 flex items-start gap-3">
                <span className="text-brand mt-1">•</span>
                hello@arftech.id
              </li>
              <li className="text-slate-400 flex items-start gap-3">
                <span className="text-brand mt-1">•</span>
                +62 858 1268 2418
              </li>
              <li className="text-slate-400 flex items-start gap-3">
                <span className="text-brand mt-1">•</span>
                @arf1208 (Instagram)
              </li>
              <li className="text-slate-400 flex items-start gap-3">
                <span className="text-brand mt-1">•</span>
                @arftech.id (TikTok)
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 <span className="text-brand">ARFTECH</span> – Engineering Innovation. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center shadow-lg shadow-brand/20 hover:bg-brand-dark transition-colors"
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "motion/react";
import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Dicoding Indonesia",
    date: "Januari 2024",
    image: "https://picsum.photos/seed/cert1/600/400",
    link: "#",
    category: "Professional"
  },
  {
    id: 2,
    title: "Internet of Things Fundamentals",
    issuer: "Cisco Networking Academy",
    date: "Maret 2024",
    image: "https://picsum.photos/seed/cert2/600/400",
    link: "#",
    category: "IoT"
  },
  {
    id: 3,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Juni 2024",
    image: "https://picsum.photos/seed/cert3/600/400",
    link: "#",
    category: "Frontend"
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold mb-4"
          >
            Pencapaian
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-slate-900"
          >
            E-Certificate & <span className="text-brand">Validasi Keahlian</span>
          </motion.h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Kumpulan sertifikat elektronik yang telah saya peroleh melalui berbagai platform pelatihan profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand/10 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-brand hover:bg-brand hover:text-white transition-all duration-300 shadow-xl"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Award size={14} /> {cert.category}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-brand mb-3">
                  <ShieldCheck size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest leading-none">{cert.issuer}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand transition-colors line-clamp-1">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

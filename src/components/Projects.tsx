import { motion } from "motion/react";
import { ExternalLink, Github, Layers, Cpu, Code } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Smart Attendance",
    translatedTitle: "Absensi Pintar",
    category: "Project IoT",
    description: "Sistem monitoring kehadiran siswa dan guru berbasis RFID Card dan ESP32 dengan dashboard real-time.",
    tags: ["ESP32", "RFID", "Web Dashboard", "IoT"],
    image: "https://picsum.photos/seed/attendance/600/400",
    icon: <Cpu size={20} />
  },
  {
    id: 2,
    title: "Inventory Management",
    translatedTitle: "Manajemen Inventaris",
    category: "Software Menengah",
    description: "Aplikasi manajemen stok barang untuk UMKM dengan fitur laporan otomatis.",
    tags: ["Python", "SQLite", "Electron"],
    image: "https://picsum.photos/seed/software/600/400",
    icon: <Layers size={20} />
  },
  {
    id: 3,
    title: "Personal Portfolio",
    translatedTitle: "Portofolio Pribadi",
    category: "Software Sederhana",
    description: "Website portofolio modern dengan desain minimalis dan responsif.",
    tags: ["HTML", "Tailwind CSS", "React"],
    image: "https://picsum.photos/seed/web/600/400",
    icon: <Code size={20} />
  },
  {
    id: 4,
    title: "Automated Greenhouse",
    translatedTitle: "Rumah Kaca Otomatis",
    category: "Project IoT",
    description: "Sistem penyiraman tanaman otomatis berdasarkan kelembaban tanah.",
    tags: ["Arduino", "Sensors", "C++"],
    image: "https://picsum.photos/seed/greenhouse/600/400",
    icon: <Cpu size={20} />
  },
];

const ProjectCard = ({ project, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand/10 transition-all duration-500"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="flex gap-3">
            <button className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors">
              <Github size={20} />
            </button>
            <button className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors">
              <ExternalLink size={20} />
            </button>
          </div>
        </div>
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
          {project.icon} {project.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand transition-colors">
          {project.title}
        </h3>
        <p className="text-[10px] font-medium text-slate-400 italic mb-2">
          ({project.translatedTitle})
        </p>
        <p className="text-slate-500 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-2 py-1 rounded-md bg-slate-50 text-slate-400 text-[10px] font-medium border border-slate-100">
              #{tag}
            </span>
          ))}
        </div>
        
        <button className="w-full py-3 rounded-xl bg-slate-50 text-slate-900 font-semibold text-sm hover:bg-brand hover:text-white transition-all duration-300 border border-slate-100 flex items-center justify-center gap-2">
          Detail Project <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};

import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold mb-4"
          >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-slate-900"
          >
            Project Unggulan <span className="text-brand">ARTECH</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 rounded-full border-2 border-brand text-brand font-bold hover:bg-brand hover:text-white transition-all duration-300">
            Lihat Semua Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}

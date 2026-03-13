import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Layers, Cpu, Code, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Smart Attendance",
    translatedTitle: "Absensi Pintar",
    category: "Project IoT",
    description: "Sistem monitoring kehadiran siswa dan guru berbasis RFID Card dan ESP32 dengan dashboard real-time.",
    fullDescription: "Sistem ini dirancang untuk mengotomatisasi pencatatan kehadiran di sekolah. Menggunakan ESP32 sebagai mikrokontroler utama dan pembaca RFID untuk identifikasi. Data dikirim secara real-time ke database dan ditampilkan melalui dashboard web yang interaktif. Fitur termasuk laporan harian, notifikasi kedatangan, dan manajemen data pengguna.",
    tags: ["ESP32", "RFID", "Web Dashboard", "IoT"],
    image: "https://image2url.com/r2/default/files/1772892556627-8b2840b1-e950-4f5e-ad70-92b08e5b9609.jpeg",
    icon: <Cpu size={20} />
  },
  {
    id: 2,
    title: "Teacher Assistant",
    translatedTitle: "Asisten Guru",
    category: "Software Menengah",
    description: "Platform web untuk membantu guru dalam manajemen tugas, nilai, dan materi pembelajaran.",
    fullDescription: "Website asisten guru ini dikembangkan untuk mempermudah administrasi kelas. Guru dapat mengunggah materi, memberikan tugas secara digital, dan melakukan penilaian otomatis. Sistem ini menggabungkan kekuatan PHP untuk backend dan TypeScript untuk frontend yang lebih aman dan terstruktur.",
    tags: ["TypeScript", "PHP", "HTML", "CSS"],
    image: "https://image2url.com/r2/default/files/1773418026167-8839030f-4d73-4c63-a400-09987f5eb6fa.png",
    icon: <Layers size={20} />
  },
  {
    id: 4,
    title: "Digital Cashier",
    translatedTitle: "Kasir Digital",
    category: "Software Menengah",
    description: "Sistem kasir digital berbasis web untuk efisiensi transaksi dan manajemen stok.",
    fullDescription: "Aplikasi kasir digital ini dirancang untuk UMKM agar dapat mengelola transaksi dengan lebih profesional. Mendukung pencetakan struk, laporan penjualan periodik, dan sinkronisasi stok otomatis. Dibangun menggunakan stack modern untuk performa yang optimal.",
    tags: ["PHP", "TSX", "React", "HTML", "JS"],
    image: "https://picsum.photos/seed/cashier/600/400",
    icon: <Layers size={20} />
  },
  {
    id: 5,
    title: "Attendance Dashboard",
    translatedTitle: "Dashboard Monitoring Kehadiran",
    category: "Software Menengah",
    description: "Dashboard analitik untuk memantau data kehadiran secara real-time dan menghasilkan laporan otomatis.",
    fullDescription: "Dashboard ini merupakan pusat kontrol untuk sistem absensi. Menampilkan statistik kehadiran harian, mingguan, dan bulanan dalam bentuk grafik yang mudah dipahami. Dilengkapi dengan fitur ekspor laporan ke PDF/Excel, manajemen data user, dan log aktivitas sistem untuk transparansi data.",
    tags: ["React", "Node.js", "Chart.js", "MySQL"],
    image: "https://picsum.photos/seed/dashboard/600/400",
    icon: <Layers size={20} />
  },
  {
    id: 3,
    title: "Personal Portfolio",
    translatedTitle: "Portofolio Pribadi",
    category: "Software Sederhana",
    description: "Website portofolio modern dengan desain minimalis, animasi halus, dan responsif.",
    fullDescription: "Project ini adalah website yang sedang Anda lihat sekarang. Dibangun dengan fokus pada pengalaman pengguna (UX) dan estetika modern. Menggunakan React untuk komponen yang reaktif dan Tailwind CSS untuk styling yang cepat dan konsisten.",
    tags: ["HTML", "Tailwind CSS", "React"],
    image: "https://image2url.com/r2/default/files/1773404922595-17d89263-ae84-4d2b-ace5-a7086b345032.png",
    icon: <Code size={20} />
  },
];

const ProjectCard = ({ project, index, onOpen }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(77,166,255,0.15)] transition-all duration-700"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-500" />
        
        <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-brand text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl">
          <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          {project.category}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-2xl bg-white text-slate-900 flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300 shadow-2xl">
              <Github size={22} />
            </button>
            <button className="w-12 h-12 rounded-2xl bg-white text-slate-900 flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300 shadow-2xl">
              <ExternalLink size={22} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <div className="mb-4">
          <h3 className="text-2xl font-black text-slate-900 group-hover:text-brand transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">
            {project.translatedTitle}
          </p>
        </div>
        
        <p className="text-slate-500 text-sm mb-8 line-clamp-2 leading-relaxed font-medium">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 rounded-lg bg-slate-50 text-slate-500 text-[10px] font-bold border border-slate-100 group-hover:border-brand/20 transition-colors">
              #{tag}
            </span>
          ))}
        </div>
        
        <motion.button 
          onClick={() => onOpen(project)}
          whileHover={{ x: 5 }}
          className="group/btn flex items-center gap-3 text-slate-900 font-black text-sm tracking-widest uppercase"
        >
          Explore Project 
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-brand group-hover/btn:text-white transition-all duration-300">
            <ArrowRight size={18} />
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

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
            Project Unggulan <span className="text-brand">ARFTECH</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, idx) => (
            <div key={project.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
              <ProjectCard project={project} index={idx} onOpen={setSelectedProject} />
            </div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-2xl bg-slate-900 text-white font-black text-sm tracking-[0.2em] uppercase hover:bg-brand transition-all duration-500 shadow-xl shadow-slate-900/10"
          >
            Lihat Semua Project
          </motion.button>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-white rounded-[32px] sm:rounded-[48px] overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md text-white md:text-slate-500 md:bg-slate-100 hover:bg-brand hover:text-white transition-all z-30 shadow-xl"
              >
                <X size={20} />
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent md:hidden" />
                <div className="absolute bottom-6 left-6 md:hidden">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                    {selectedProject.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 overflow-y-auto custom-scrollbar">
                <div className="hidden md:block">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand/10 text-brand text-[11px] font-bold uppercase tracking-widest mb-6">
                    {selectedProject.category}
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-base font-medium text-slate-400 italic mb-8">
                    {selectedProject.translatedTitle}
                  </p>
                </div>

                <div className="space-y-10">
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-1 bg-brand rounded-full" />
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Deskripsi Project</h4>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg font-medium">
                      {selectedProject.fullDescription}
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-1 bg-brand rounded-full" />
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Teknologi</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag: string) => (
                        <div key={tag} className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-50 text-slate-700 text-sm font-bold border border-slate-100 hover:border-brand/30 hover:bg-white transition-all cursor-default">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </section>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-4 rounded-2xl bg-brand text-white font-black text-lg flex items-center justify-center gap-3 hover:bg-brand-dark transition-all shadow-xl shadow-brand/20"
                    >
                      Live Demo <ExternalLink size={20} />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-4 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/10"
                    >
                      <Github size={24} />
                      <span className="sm:hidden font-bold">Source Code</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

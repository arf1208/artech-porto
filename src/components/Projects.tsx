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
    image: "https://picsum.photos/seed/teacher/600/400",
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
    image: "https://picsum.photos/seed/web/600/400",
    icon: <Code size={20} />
  },
];

const ProjectCard = ({ project, index, onOpen }: any) => {
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
        
        <button 
          onClick={() => onOpen(project)}
          className="w-full py-3 rounded-xl bg-slate-50 text-slate-900 font-semibold text-sm hover:bg-brand hover:text-white transition-all duration-300 border border-slate-100 flex items-center justify-center gap-2"
        >
          Detail Project <ArrowRight size={16} />
        </button>
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
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 rounded-full border-2 border-brand text-brand font-bold hover:bg-brand hover:text-white transition-all duration-300">
            Lihat Semua Project
          </button>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-[40px] overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-brand hover:text-white transition-all z-20"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-wider mb-4">
                    {selectedProject.category}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-400 italic mb-6">
                    ({selectedProject.translatedTitle})
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Deskripsi Project</h4>
                      <p className="text-slate-600 leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Teknologi</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag: string) => (
                          <span key={tag} className="px-3 py-1 rounded-lg bg-slate-50 text-slate-600 text-xs font-semibold border border-slate-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button className="flex-1 py-3 rounded-xl bg-brand text-white font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-all shadow-lg shadow-brand/20">
                        Live Demo <ExternalLink size={18} />
                      </button>
                      <button className="p-3 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 transition-all">
                        <Github size={20} />
                      </button>
                    </div>
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

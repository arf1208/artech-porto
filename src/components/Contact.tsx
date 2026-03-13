import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Send, CheckCircle, Mail, Phone, MapPin, Instagram, Music2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validate = () => {
    let tempErrors = { name: "", email: "", message: "" };
    let isValid = true;
    if (!formData.name) { tempErrors.name = "Nama wajib diisi"; isValid = false; }
    if (!formData.email) { tempErrors.email = "Email wajib diisi"; isValid = false; }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) { tempErrors.email = "Email tidak valid"; isValid = false; }
    if (!formData.message) { tempErrors.message = "Pesan wajib diisi"; isValid = false; }
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold mb-6">
              Contact Me
            </div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Mari Berkolaborasi untuk <span className="text-brand">Masa Depan</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Punya ide project menarik atau ingin berdiskusi seputar teknologi? Jangan ragu untuk menghubungi saya melalui form di samping atau kontak di bawah ini.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-bold text-slate-900">@arftechh</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-lg font-bold text-slate-900">+62 858 1268 2418</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-bold text-slate-900">Lamongan, Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Instagram</p>
                  <p className="text-lg font-bold text-slate-900">@arftechh</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm">
                  <Music2 size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">TikTok</p>
                  <p className="text-lg font-bold text-slate-900">@arftechh</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white p-8 sm:p-12 rounded-[40px] shadow-2xl shadow-brand/10 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${errors.name ? 'border-red-300' : 'border-slate-100'} focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all`}
                    placeholder="Masukkan nama Anda"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${errors.email ? 'border-red-300' : 'border-slate-100'} focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all`}
                    placeholder="nama@email.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${errors.message ? 'border-red-300' : 'border-slate-100'} focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all resize-none`}
                    placeholder="Tuliskan pesan Anda di sini..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-brand text-white font-bold flex items-center justify-center gap-3 hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Kirim Pesan <Send size={20} /></>
                  )}
                </button>
              </form>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[40px] flex flex-col items-center justify-center text-center p-8 z-20"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 mb-6">
                      <CheckCircle size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Pesan Terkirim!</h3>
                    <p className="text-slate-500">Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

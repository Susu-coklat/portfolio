import { motion } from "motion/react";
import {
  Briefcase,
  Code,
  GraduationCap,
  Globe,
  Mail,
  MapPin,
  Phone,
  User,
  Wrench,
  ChevronRight,
  ExternalLink,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { CV_DATA } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-800 font-sans selection:bg-blue-100 pb-20 md:pb-0">
      
      {/* Fixed Bottom/Top Nav for Mobile/Desktop */}
      <nav className="fixed bottom-0 md:top-0 md:bottom-auto left-0 right-0 bg-white/80 backdrop-blur-md border-t md:border-b md:border-t-0 border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-3 font-bold text-slate-900">
            <img src="/avatar.png" alt="Logo" className="w-8 h-8 rounded-full object-cover border border-slate-200" />
            {CV_DATA.name}
          </div>
          <div className="flex w-full md:w-auto justify-between md:justify-center items-center gap-4 md:gap-8 text-sm font-semibold text-slate-600 overflow-x-auto no-scrollbar">
            <a href="#tentang" className="hover:text-blue-600 transition-colors whitespace-nowrap">Tentang</a>
            <a href="#project" className="hover:text-blue-600 transition-colors whitespace-nowrap">Project</a>
            <a href="#pengalaman" className="hover:text-blue-600 transition-colors whitespace-nowrap">Pengalaman</a>
            <a href="#layanan" className="hover:text-blue-600 transition-colors whitespace-nowrap">Layanan</a>
            <a href="#kontak" className="hover:text-blue-600 transition-colors whitespace-nowrap">Kontak</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-32 space-y-32">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-8"
          >
            <span className="px-4 py-1.5 bg-white text-blue-600 font-bold rounded-full text-xs uppercase tracking-wider shadow-sm border border-slate-100">
              Portfolio Personal
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              {CV_DATA.name} <br/>
              <span className="text-blue-600 text-3xl md:text-5xl mt-2 block">
                IT Support, Web Developer, WordPress & SEO
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Membantu membuat website yang rapi, cepat, mudah dikelola, serta mendukung kebutuhan bisnis, event, SEO, data, dan otomasi sederhana.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#project" className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30">
                Lihat Project
              </a>
              <a href="#kontak" className="px-8 py-3.5 bg-white text-blue-600 font-bold rounded-full hover:bg-slate-50 transition-all border border-slate-200">
                Hubungi Saya
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-500 pt-4">
              <span className="flex items-center gap-1.5"><MapPin size={16} /> Bengkalis, Riau</span>
              <span className="flex items-center gap-1.5"><Mail size={16} /> {CV_DATA.contact.email}</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="w-full max-w-md bg-white rounded-[2.5rem] p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative z-10">
              <div className="bg-slate-100 rounded-[2rem] aspect-[4/5] w-full flex items-center justify-center overflow-hidden relative">
                {/* User Image */}
                <img 
                  src="/avatar.png" 
                  alt={CV_DATA.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
              </div>
              <div className="text-center mt-6 mb-4">
                <h3 className="text-2xl font-display font-bold text-slate-900">{CV_DATA.name}</h3>
                <p className="text-sm font-bold text-slate-500 mt-1">IT Support • Web Developer • SEO</p>
              </div>
            </div>
            {/* Decorative background blob */}
            <div className="absolute inset-0 bg-blue-100 blur-[80px] rounded-full opacity-50 -z-10 transform scale-90 translate-y-10"></div>
          </motion.div>
        </section>

        {/* Tentang Saya */}
        <section id="tentang" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-32"
          >
            <span className="px-4 py-1.5 bg-white text-blue-600 font-bold rounded-full text-xs uppercase tracking-wider shadow-sm border border-slate-100 inline-block">
              Tentang Saya
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Membangun website yang rapi, cepat, dan mudah digunakan.
            </h2>
            <p className="text-slate-500 text-lg">
              Saya fokus membantu kebutuhan digital dari sisi tampilan, fungsi, SEO, data, dan pengelolaan teknis website.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 space-y-6"
          >
            <p className="text-slate-600 leading-relaxed text-lg">
              Saya memiliki latar belakang <strong>Teknik Informatika</strong> dan pengalaman utama sebagai <strong>{CV_DATA.role} Digital & IT Services</strong>. Dalam pekerjaan ini saya terbiasa menangani kebutuhan website, WordPress, VPS, pengelolaan data sederhana, scraping ringan, dan otomasi dasar.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              {CV_DATA.profile}
            </p>
            
            <div className="pt-6 border-t border-slate-100">
              <div className="flex flex-wrap gap-2.5 mt-2">
                {CV_DATA.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-[#f0f4f8] text-blue-700 rounded-full text-xs font-bold shadow-sm">
                    {skill.length > 30 ? skill.substring(0, 30) + '...' : skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="project" className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-6"
          >
            <span className="px-4 py-1.5 bg-white text-blue-600 font-bold rounded-full text-xs uppercase tracking-wider shadow-sm border border-slate-100 inline-block">
              Project Website
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Project yang telah dikerjakan
            </h2>
            <p className="text-slate-500 text-lg">
              Sebagian project portofolio diringkas agar lebih bersih dan profesional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CV_DATA.projects.map((group, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-4 right-6 text-7xl font-display font-extrabold text-slate-50 select-none -z-0">
                  0{idx + 1}
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-6 block">
                    Portfolio
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{group.category}</h3>
                  <p className="text-slate-500 text-sm mb-6 flex-grow">
                    Kumpulan project pada kategori {group.category.toLowerCase()} yang dikerjakan secara profesional.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-50">
                    {group.items.map((item, iIdx) => (
                      <span 
                        key={iIdx} 
                        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#f0f4f8] text-blue-700 text-xs font-bold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pengalaman */}
        <section id="pengalaman" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-32"
          >
            <span className="px-4 py-1.5 bg-white text-blue-600 font-bold rounded-full text-xs uppercase tracking-wider shadow-sm border border-slate-100 inline-block">
              Pengalaman Kerja
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Satu pengalaman utama, dengan cakupan kerja digital yang luas.
            </h2>
            <p className="text-slate-500 text-lg">
              Bagian ini dibuat lebih sederhana agar tidak terlihat seperti banyak pekerjaan terpisah.
            </p>
          </motion.div>
          
          <div className="lg:col-span-7 space-y-6">
            {CV_DATA.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
              >
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold mb-6">
                  {exp.year}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{exp.role}</h3>
                <ul className="space-y-4">
                  {exp.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-3 text-slate-600">
                      <ChevronRight size={18} className="text-blue-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Layanan */}
        <section id="layanan" className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-6"
          >
            <span className="px-4 py-1.5 bg-white text-blue-600 font-bold rounded-full text-xs uppercase tracking-wider shadow-sm border border-slate-100 inline-block">
              Layanan & Tools
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Hal yang bisa saya bantu
            </h2>
            <p className="text-slate-500 text-lg">
              Layanan dibuat jelas agar mudah dipahami oleh calon klien, perusahaan, atau rekan kerja.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CV_DATA.tools.map((tool, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col gap-4 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div className="pt-2 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">{tool.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact/CTA */}
        <section id="kontak" className="pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f172a] rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
              <div className="lg:col-span-6 space-y-6 text-white">
                <span className="px-4 py-1.5 bg-white/10 text-blue-300 font-bold rounded-full text-xs uppercase tracking-wider inline-block">
                  Kontak
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-extrabold leading-[1.1]">
                  Tertarik bekerja sama atau ingin melihat CV?
                </h2>
                <p className="text-slate-400 text-lg max-w-md">
                  Silakan hubungi saya melalui email atau WhatsApp untuk kebutuhan website, WordPress, SEO, VPS, dashboard, scraping, dan otomasi sederhana.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href={`mailto:${CV_DATA.contact.email}`} className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg">
                    Kirim Email
                  </a>
                  <a href={`https://wa.me/${CV_DATA.contact.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-50 transition-all">
                    Chat WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">Email</p>
                  <p className="text-white font-semibold">{CV_DATA.contact.email}</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">WhatsApp</p>
                  <p className="text-white font-semibold">{CV_DATA.contact.phone}</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">Website</p>
                  <p className="text-white font-semibold">{CV_DATA.contact.website}</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">Lokasi</p>
                  <p className="text-white font-semibold">{CV_DATA.contact.address}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
      
      {/* Footer */}
      <footer className="bg-[#0f172a] border-t border-white/10 pt-16 pb-8 md:pb-16 mt-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <img src="/avatar.png" alt="Logo" className="w-12 h-12 rounded-full object-cover border border-slate-700" />
            <h3 className="text-white font-bold text-lg">{CV_DATA.name}</h3>
            <p className="text-slate-400 text-sm max-w-xs">Portfolio PHP custom yang ringan, responsif, dan mudah dikembangkan.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-4">Navigasi</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <a href="#tentang" className="hover:text-blue-400 transition-colors">Tentang</a>
              <a href="#project" className="hover:text-blue-400 transition-colors">Project</a>
              <a href="#pengalaman" className="hover:text-blue-400 transition-colors">Pengalaman</a>
              <a href="#layanan" className="hover:text-blue-400 transition-colors">Layanan</a>
              <a href="#kontak" className="hover:text-blue-400 transition-colors">Kontak</a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-4">Kontak</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <a href={`mailto:${CV_DATA.contact.email}`} className="hover:text-blue-400 transition-colors">{CV_DATA.contact.email}</a>
              <a href={`https://wa.me/${CV_DATA.contact.phone.replace(/[^0-9]/g, '')}`} className="hover:text-blue-400 transition-colors">Hubungi via WhatsApp</a>
              <span>{CV_DATA.contact.address}</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {CV_DATA.name}. All rights reserved.</p>
          <a href="#" className="hover:text-white transition-colors">Kembali ke atas &uarr;</a>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Optional based on design) */}
      <a 
        href={`https://wa.me/${CV_DATA.contact.phone.replace(/[^0-9]/g, '')}`}
        className="fixed bottom-20 md:bottom-8 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50 hover:scale-105 active:scale-95"
        target="_blank" 
        rel="noreferrer"
        aria-label="Chat WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
}

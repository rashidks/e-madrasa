import {
    FaBookOpen,
    FaUserGraduate,
    FaShieldAlt,
    FaArrowRight,
    FaGem,
    FaMosque,
    FaStar,
    FaUsers,
    FaGraduationCap,
    FaAward,
  } from "react-icons/fa";
  import { motion } from "framer-motion";
  
  const LeftPanel = () => {
    const features = [
      {
        icon: FaBookOpen,
        title: "Smart Learning",
        description: "Learn anytime from anywhere",
        gradient: "from-amber-400/30 to-amber-300/20",
      },
      {
        icon: FaUserGraduate,
        title: "Student Progress",
        description: "Parents can monitor learning progress",
        gradient: "from-emerald-400/30 to-emerald-300/20",
      },
      {
        icon: FaShieldAlt,
        title: "Secure Platform",
        description: "Role-based authentication & secure access",
        gradient: "from-blue-400/30 to-blue-300/20",
      },
    ];
  
    const stats = [
      { value: "10K+", label: "Students", icon: FaUsers },
      { value: "500+", label: "Madrasas", icon: FaGraduationCap },
      { value: "4.9★", label: "Rating", icon: FaStar },
    ];
  
    return (
  <div className="hidden lg:flex flex-col justify-center h-screen bg-gradient-to-br from-[#0d2818] via-[#1a4a2e] to-[#2d6a4f] p-12 text-white relative overflow-hidden">
        
        {/* Premium Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-300/3 rounded-full blur-3xl"></div>
        </div>
  
        {/* Premium Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
              radial-gradient(circle at 80% 50%, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
  
        {/* Decorative Gold Accents */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-amber-400/10 rounded-full rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-amber-400/10 rounded-full rotate-45"></div>
        <div className="absolute top-1/3 right-12 w-16 h-16 border border-amber-400/5 rounded-full"></div>
        <div className="absolute bottom-1/3 left-12 w-20 h-20 border border-amber-400/5 rounded-full"></div>
  
        {/* Premium Gold Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent"></div>
  
        {/* Main Content */}
        <div className="relative z-10 max-w-2xl mx-auto w-full">
          
          {/* Premium Gold Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400/10 to-amber-500/5 backdrop-blur-xl px-5 py-2.5 rounded-full mb-8 border border-amber-400/20 shadow-2xl shadow-amber-500/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <FaGem className="text-amber-400 text-xs" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-amber-200/80">
              Premium Islamic Education
            </span>
            <FaGem className="text-amber-400/50 text-xs" />
          </motion.div>
  
          {/* Title Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative inline-block">
              <h1 className="text-6xl font-bold tracking-tight leading-none">
                <span className="bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent font-serif">
                  E-Madrasa
                </span>
                <span className="absolute -top-3 -right-14 text-3xl text-amber-400/20 font-serif">✦</span>
              </h1>
            </div>
            
            {/* Ornamental Divider */}
            <div className="flex items-center justify-center gap-4 mt-5">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-amber-400/40 rounded-full"></div>
              <FaMosque className="text-amber-400/30 text-sm" />
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-amber-400/40 rounded-full"></div>
            </div>
  
            <p className="mt-5 max-w-2xl mx-auto text-base leading-relaxed text-white/70 font-light tracking-wide">
              Begin your journey with us today
              <span className="block text-amber-300/50 text-sm mt-1 font-light tracking-wider">
                Join 10,000+ students learning Islamic studies online
              </span>
            </p>
          </motion.div>
  
          {/* Premium Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-12 mt-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  <stat.icon className="text-amber-400/30 text-[10px]" />
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
  
          {/* Premium Feature Cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-3 mt-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative flex items-center gap-5 p-4 rounded-2xl bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm border border-white/5 hover:border-amber-400/20 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-400/5 to-transparent"></div>
                
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`relative rounded-2xl bg-gradient-to-br ${feature.gradient} p-3.5 shadow-xl group-hover:shadow-amber-400/10 transition-shadow duration-500`}
                >
                  <feature.icon size={18} className="text-white/80 relative z-10" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent"></div>
                </motion.div>
  
                <div className="flex-1 relative z-10">
                  <h3 className="text-base font-semibold tracking-wide group-hover:text-amber-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/40 text-xs font-light group-hover:text-white/60 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
  
                <motion.div whileHover={{ x: 5 }} className="relative z-10">
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors duration-300">
                    <FaArrowRight className="text-white/20 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300 text-sm" />
                  </div>
                </motion.div>
  
                <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-6 h-[1px] bg-gradient-to-l from-amber-400/40 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-[1px] h-6 bg-gradient-to-b from-amber-400/40 to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
  
        {/* Bottom Decorative Line */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
      </div>
    );
  };
  
  export default LeftPanel;
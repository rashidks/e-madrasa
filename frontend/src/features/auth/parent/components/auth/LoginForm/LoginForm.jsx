// // src/features/auth/parent/components/login/LoginForm/LoginForm.jsx
// import { useState } from "react";
// import {
//   FaEnvelope,
//   FaLock,
//   FaGoogle,
//   FaApple,
//   FaFacebook,
//   FaArrowLeft,
//   FaMobileAlt,
//   FaEye,
//   FaEyeSlash,
//   FaCheckCircle,
//   FaKey,
//   FaShieldAlt,
//   FaLock as FaLockIcon,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const LoginForm = ({ onSwitch }) => {
//   const [loginMethod, setLoginMethod] = useState("email");
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
  
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");

//   const handleSendOtp = () => {
//     if (phone.length >= 10) {
//       setOtpSent(true);
//     }
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Login attempted");
//   };

//   const switchToEmail = () => {
//     setLoginMethod("email");
//     setOtpSent(false);
//     setOtp("");
//   };

//   const switchToPhone = () => {
//     setLoginMethod("phone");
//     setOtpSent(false);
//     setOtp("");
//   };

//   return (
//     <div className="w-full max-w-sm mx-auto">
      
//       {/* Back Button */}
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.1 }}
//         className="mb-4"
//       >
//         <Link
//           to="/"
//           className="group flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-900 transition-colors duration-300"
//         >
//           <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
//           <span className="font-medium">Back to Home</span>
//         </Link>
//       </motion.div>

//       {/* Main Card - Compact */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-emerald-100/50"
//       >
        
//         {/* Header - Compact */}
//         <div className="mb-5">
//           <h2 className="text-xl font-bold text-slate-800">
//             Welcome Back
//           </h2>
//           <p className="mt-1 text-xs text-slate-500">
//             Sign in to continue your learning journey
//           </p>
//         </div>

//         {/* Login Method Tabs - Compact */}
//         <div className="flex gap-2 mb-4 bg-emerald-50/80 p-1 rounded-xl">
//           <button
//             onClick={switchToEmail}
//             className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all duration-300 ${
//               loginMethod === "email"
//                 ? "bg-white shadow-lg text-emerald-600"
//                 : "text-slate-600 hover:text-emerald-600"
//             }`}
//           >
//             <FaEnvelope className="inline mr-1.5 text-[10px]" />
//             Email
//           </button>
//           <button
//             onClick={switchToPhone}
//             className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all duration-300 ${
//               loginMethod === "phone"
//                 ? "bg-white shadow-lg text-emerald-600"
//                 : "text-slate-600 hover:text-emerald-600"
//             }`}
//           >
//             <FaMobileAlt className="inline mr-1.5 text-[10px]" />
//             Phone
//           </button>
//         </div>

//         {/* Login Form - Compact */}
//         <form onSubmit={handleLogin} className="space-y-3">
          
//           {/* Email Login Fields */}
//           {loginMethod === "email" && (
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//               className="space-y-3"
//             >
//               <div className="relative group">
//                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
//                   <FaEnvelope className="text-xs" />
//                 </div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email address"
//                   className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-emerald-400 focus:bg-white focus:outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400"
//                   required
//                 />
//               </div>

//               <div className="relative group">
//                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
//                   <FaLock className="text-xs" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Password"
//                   className="w-full pl-9 pr-10 py-2.5 text-sm bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-emerald-400 focus:bg-white focus:outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600 transition-colors"
//                 >
//                   {showPassword ? <FaEyeSlash className="text-xs" /> : <FaEye className="text-xs" />}
//                 </button>
//               </div>
//             </motion.div>
//           )}

//           {/* Phone/OTP Login Fields - Compact */}
//           {loginMethod === "phone" && (
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//               className="space-y-3"
//             >
//               <div className="relative group">
//                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
//                   <FaMobileAlt className="text-xs" />
//                 </div>
//                 <input
//                   type="tel"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   placeholder="Phone number"
//                   className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-emerald-400 focus:bg-white focus:outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400"
//                   maxLength="10"
//                   disabled={otpSent}
//                   required
//                 />
//               </div>

//               {otpSent && (
//                 <div className="space-y-2">
//                   <div className="relative group">
//                     <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
//                       <FaKey className="text-xs" />
//                     </div>
//                     <input
//                       type="text"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                       placeholder="Enter OTP"
//                       className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-emerald-400 focus:bg-white focus:outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400 text-center tracking-widest"
//                       maxLength="6"
//                       required
//                     />
//                   </div>
                  
//                   <div className="flex items-center justify-between">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setOtpSent(false);
//                         setPhone("");
//                         setOtp("");
//                       }}
//                       className="text-[10px] text-emerald-600 hover:text-emerald-800 font-medium transition-colors flex items-center gap-1"
//                     >
//                       <FaArrowLeft className="text-[8px]" />
//                       Change number
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleSendOtp}
//                       className="text-[10px] text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
//                     >
//                       Resend OTP
//                     </button>
//                   </div>
                  
//                   <div className="text-center">
//                     <span className="text-[10px] text-slate-400">
//                       OTP expires in <span className="text-emerald-600 font-semibold">2:30</span>
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           )}

//           {/* Remember Me & Forgot Password - Compact */}
//           <div className="flex items-center justify-between">
//             <label className="flex items-center gap-1.5 text-[11px] text-slate-600 cursor-pointer group">
//               <div className="relative">
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                   className="sr-only"
//                 />
//                 <div className={`w-4 h-4 rounded-md border-2 transition-all duration-300 flex items-center justify-center ${
//                   rememberMe 
//                     ? "bg-emerald-500 border-emerald-500" 
//                     : "border-slate-300 group-hover:border-emerald-400"
//                 }`}>
//                   {rememberMe && <FaCheckCircle className="text-white text-[8px]" />}
//                 </div>
//               </div>
//               <span className="group-hover:text-emerald-600 transition-colors">
//                 Remember me
//               </span>
//             </label>
//             {loginMethod === "email" && (
//               <button
//                 type="button"
//                 className="text-[11px] text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
//               >
//                 Forgot password?
//               </button>
//             )}
//           </div>

//           {/* Submit Button - Compact */}
//           <button
//             type="submit"
//             className="w-full py-2.5 text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
//           >
//             {loginMethod === "phone" && !otpSent ? "Send OTP" : "Sign In"}
//           </button>
//         </form>

//         {/* Divider - Compact */}
//         <div className="relative my-4">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-slate-200"></div>
//           </div>
//           <div className="relative flex justify-center text-[10px]">
//             <span className="px-3 bg-white/80 backdrop-blur text-slate-400 uppercase tracking-wider">
//               Or continue with
//             </span>
//           </div>
//         </div>

//         {/* Social Login Buttons - Compact */}
//         <div className="grid grid-cols-3 gap-2">
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="flex items-center justify-center gap-1.5 py-2 bg-white border-2 border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group"
//           >
//             <FaGoogle className="text-red-500 text-sm group-hover:scale-110 transition-transform" />
//             <span className="text-[10px] font-medium text-slate-600">Google</span>
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="flex items-center justify-center gap-1.5 py-2 bg-white border-2 border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group"
//           >
//             <FaApple className="text-slate-700 text-sm group-hover:scale-110 transition-transform" />
//             <span className="text-[10px] font-medium text-slate-600">Apple</span>
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="flex items-center justify-center gap-1.5 py-2 bg-white border-2 border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group"
//           >
//             <FaFacebook className="text-blue-600 text-sm group-hover:scale-110 transition-transform" />
//             <span className="text-[10px] font-medium text-slate-600">Facebook</span>
//           </motion.button>
//         </div>

//         {/* Sign Up Link - Compact */}
//         <p className="mt-4 text-center text-[11px] text-slate-500">
//           Don't have an account?{" "}
//           <button
//             onClick={onSwitch}
//             className="text-emerald-600 font-semibold hover:text-emerald-800 transition-colors"
//           >
//             Sign Up
//           </button>
//         </p>

//         {/* Trust Badge - Compact */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="mt-4 text-center"
//         >
//           <div className="flex items-center justify-center gap-3 text-[9px] text-slate-400">
//             <span className="flex items-center gap-1">
//               <FaShieldAlt className="text-emerald-500 text-[8px]" />
//               Secure
//             </span>
//             <span className="w-px h-3 bg-slate-300"></span>
//             <span className="flex items-center gap-1">
//               <FaLockIcon className="text-emerald-500 text-[8px]" />
//               Encrypted
//             </span>
//             <span className="w-px h-3 bg-slate-300"></span>
//             <span className="flex items-center gap-1">
//               <FaCheckCircle className="text-emerald-500 text-[8px]" />
//               2FA Ready
//             </span>
//           </div>
//         </motion.div>

//       </motion.div>
//     </div>
//   );
// };

// export default LoginForm;















// src/features/auth/parent/components/login/LoginForm/LoginForm.jsx
import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaApple,
  FaFacebook,
  FaArrowLeft,
  FaMobileAlt,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaKey,
  FaShieldAlt,
  FaLock as FaLockIcon,
  FaUser,
  FaSms,
  FaUserCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LoginForm = ({ onSwitch }) => {
  // State
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [useOtp, setUseOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  // Detect identifier type
  const detectIdentifierType = (value) => {
    if (!value) return "unknown";
    if (value.includes("@")) return "email";
    if (/^\d+$/.test(value)) return "phone";
    return "username";
  };

  const identifierType = detectIdentifierType(identifier);

  // Get placeholder
  const getPlaceholder = () => {
    if (useOtp) {
      return "Email or phone number";
    }
    return "Username, email, or phone number";
  };

  // Get icon
  const getIcon = () => {
    if (!identifier) return <FaUserCircle className="text-xs" />;
    switch(identifierType) {
      case "email": return <FaEnvelope className="text-xs text-emerald-500" />;
      case "phone": return <FaMobileAlt className="text-xs text-emerald-500" />;
      case "username": return <FaUser className="text-xs text-emerald-500" />;
      default: return <FaUserCircle className="text-xs" />;
    }
  };

  // Get detection label
  const getDetectionLabel = () => {
    if (!identifier) return null;
    switch(identifierType) {
      case "email": return <span className="text-[8px] text-emerald-500 font-medium">📧 Email</span>;
      case "phone": return <span className="text-[8px] text-emerald-500 font-medium">📱 Phone</span>;
      case "username": return <span className="text-[8px] text-emerald-500 font-medium">👤 Username</span>;
      default: return null;
    }
  };

  // Handle OTP send
  const handleSendOtp = () => {
    if (identifier.length > 0) {
      setOtpSent(true);
    }
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = {
      identifier,
      identifierType,
      ...(useOtp ? { otp } : { password }),
      rememberMe,
    };
    console.log("Login attempted:", loginData);
  };

  // Toggle OTP mode
  const toggleOtp = () => {
    setUseOtp(!useOtp);
    setOtpSent(false);
    setOtp("");
    setPassword("");
  };

  // Reset OTP state
  const resetOtp = () => {
    setOtpSent(false);
    setOtp("");
    setIdentifier("");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-4"
      >
        <Link
          to="/"
          className="group flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-900 transition-colors duration-300"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </motion.div>

      {/* Main Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-emerald-100/50"
      >
        
        {/* Header */}
        <div className="mb-5">
          <h2 className="text-xl font-bold text-slate-800">
            Welcome Back
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Sign in to continue your learning journey
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-3.5">
          
          {/* Smart Identifier Field */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative group"
          >
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
              {getIcon()}
            </div>
            <input
              type={identifierType === "email" ? "email" : "text"}
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder={getPlaceholder()}
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-emerald-400 focus:bg-white focus:outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400"
              disabled={otpSent}
              required
            />
            
            {/* Detection Badge - Shows what type was detected */}
            {identifier && !otpSent && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {getDetectionLabel()}
              </div>
            )}
          </motion.div>

          {/* Password Field (when NOT using OTP) */}
          {!useOtp && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                <FaLock className="text-xs" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-9 pr-10 py-2.5 text-sm bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-emerald-400 focus:bg-white focus:outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400"
                required={!useOtp}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600 transition-colors"
              >
                {showPassword ? <FaEyeSlash className="text-xs" /> : <FaEye className="text-xs" />}
              </button>
            </motion.div>
          )}

          {/* OTP Flow */}
          {useOtp && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {otpSent ? (
                <>
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                      <FaKey className="text-xs" />
                    </div>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder={`Enter OTP sent to ${identifierType === 'email' ? 'email' : 'phone'}`}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-emerald-400 focus:bg-white focus:outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400 text-center tracking-widest"
                      maxLength="6"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={resetOtp}
                      className="text-[10px] text-emerald-600 hover:text-emerald-800 font-medium transition-colors flex items-center gap-1"
                    >
                      <FaArrowLeft className="text-[8px]" />
                      Change login
                    </button>
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="text-[10px] text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
                    >
                      Resend OTP
                    </button>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] text-slate-400">
                      OTP expires in <span className="text-emerald-600 font-semibold">2:30</span>
                    </span>
                  </div>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={!identifier}
                  className={`w-full py-2.5 text-sm rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    identifier 
                      ? "bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30" 
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  <FaSms className="text-xs" />
                  Send OTP
                </button>
              )}
            </motion.div>
          )}

          {/* ================================================================ */}
          {/* BUTTON-BASED SWITCH - Password ↔ OTP */}
          {/* ================================================================ */}
          
          <div className="text-center py-1">
            {!useOtp ? (
              <button
                type="button"
                onClick={() => setUseOtp(true)}
                className="text-xs text-emerald-600 hover:text-emerald-700 font-medium transition-colors flex items-center justify-center gap-1.5 mx-auto hover:underline"
              >
                <FaSms className="text-[10px]" />
                Login with OTP 
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setUseOtp(false)}
                className="text-xs text-emerald-600 hover:text-emerald-700 font-medium transition-colors flex items-center justify-center gap-1.5 mx-auto hover:underline"
              >
                <FaLock className="text-[10px]" />
                Login with password 
              </button>
            )}
          </div>

          {/* ================================================================ */}
          {/* END OF BUTTON-BASED SWITCH */}
          {/* ================================================================ */}

          {/* Remember Me & Forgot Password */}
          {!useOtp && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only"
                  />
                  <div 
                    className={`w-4 h-4 rounded-md border-2 transition-all duration-300 flex items-center justify-center cursor-pointer ${
                      rememberMe 
                        ? "bg-emerald-500 border-emerald-500" 
                        : "border-slate-300 hover:border-emerald-400"
                    }`}
                    onClick={() => setRememberMe(!rememberMe)}
                  >
                    {rememberMe && <FaCheckCircle className="text-white text-[8px]" />}
                  </div>
                </div>
                <span className="text-[11px] text-slate-600">Remember me</span>
              </div>
              <button
                type="button"
                className="text-[11px] text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {useOtp && otpSent ? "Verify & Sign In" : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-[10px]">
            <span className="px-3 bg-white/80 backdrop-blur text-slate-400 uppercase tracking-wider">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-1.5 py-2 bg-white border-2 border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group"
          >
            <FaGoogle className="text-red-500 text-sm group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-medium text-slate-600">Google</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-1.5 py-2 bg-white border-2 border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group"
          >
            <FaApple className="text-slate-700 text-sm group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-medium text-slate-600">Apple</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-1.5 py-2 bg-white border-2 border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group"
          >
            <FaFacebook className="text-blue-600 text-sm group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-medium text-slate-600">Facebook</span>
          </motion.button>
        </div>

        {/* Sign Up Link */}
        <p className="mt-4 text-center text-[11px] text-slate-500">
          Don't have an account?{" "}
          <button
            onClick={onSwitch}
            className="text-emerald-600 font-semibold hover:text-emerald-800 transition-colors"
          >
            Sign Up
          </button>
        </p>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-center"
        >
          <div className="flex items-center justify-center gap-3 text-[9px] text-slate-400">
            <span className="flex items-center gap-1">
              <FaShieldAlt className="text-emerald-500 text-[8px]" />
              Secure
            </span>
            <span className="w-px h-3 bg-slate-300"></span>
            <span className="flex items-center gap-1">
              <FaLockIcon className="text-emerald-500 text-[8px]" />
              Encrypted
            </span>
            <span className="w-px h-3 bg-slate-300"></span>
            <span className="flex items-center gap-1">
              <FaCheckCircle className="text-emerald-500 text-[8px]" />
              2FA Ready
            </span>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default LoginForm;
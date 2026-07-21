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
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [loginMethod, setLoginMethod] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = () => {
    if (phone.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const switchToEmail = () => {
    setLoginMethod("email");
    setOtpSent(false);
    setOtp("");
  };

  const switchToPhone = () => {
    setLoginMethod("phone");
    setOtpSent(false);
    setOtp("");
  };

  return (
    <>
         <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Back Button */}
        <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.1 }}
  className="mb-6"
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
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-emerald-100/50"
        >
          
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800">
              Welcome Back
            </h2>
            <p className="mt-2 text-slate-500 text-sm">
              Sign in to continue your learning journey
            </p>
          </div>

          {/* Login Method Tabs */}
          <div className="flex gap-2 mb-6 bg-emerald-50/80 p-1 rounded-xl">
            <button
              onClick={switchToEmail}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                loginMethod === "email"
                  ? "bg-white shadow-lg text-emerald-600"
                  : "text-slate-600 hover:text-emerald-600"
              }`}
            >
              <FaEnvelope className="inline mr-2" />
              Email
            </button>
            <button
              onClick={switchToPhone}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                loginMethod === "phone"
                  ? "bg-white shadow-lg text-emerald-600"
                  : "text-slate-600 hover:text-emerald-600"
              }`}
            >
              <FaMobileAlt className="inline mr-2" />
              Phone
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Email Login Fields */}
            {loginMethod === "email" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-emerald-400 focus:bg-white focus:outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400"
                    required
                  />
                </div>

                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    <FaLock />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full pl-10 pr-12 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-emerald-400 focus:bg-white focus:outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600 transition-colors"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Phone/OTP Login Fields */}
            {loginMethod === "phone" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    <FaMobileAlt />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                    className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-emerald-400 focus:bg-white focus:outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400"
                    maxLength="10"
                    disabled={otpSent}
                    required
                  />
                </div>

                {/* OTP Input - only shown after OTP sent */}
                {otpSent && (
                  <div className="space-y-3">
                    <div className="relative group">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                        <FaKey />
                      </div>
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-emerald-400 focus:bg-white focus:outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400 text-center text-lg font-semibold tracking-widest"
                        maxLength="6"
                        required
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => {
                          setOtpSent(false);
                          setPhone("");
                          setOtp("");
                        }}
                        className="text-sm text-emerald-600 hover:text-emerald-800 font-medium transition-colors flex items-center gap-1"
                      >
                        <FaArrowLeft className="text-xs" />
                        Change phone number
                      </button>
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="text-sm text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
                      >
                        Resend OTP
                      </button>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-xs text-slate-400">
                        OTP expires in <span className="text-emerald-600 font-semibold">2:30</span>
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-md border-2 transition-all duration-300 flex items-center justify-center ${
                    rememberMe 
                      ? "bg-emerald-500 border-emerald-500" 
                      : "border-slate-300 group-hover:border-emerald-400"
                  }`}>
                    {rememberMe && <FaCheckCircle className="text-white text-xs" />}
                  </div>
                </div>
                <span className="group-hover:text-emerald-600 transition-colors">
                  Remember me
                </span>
              </label>
              {loginMethod === "email" && (
                <button
                  type="button"
                  className="text-sm text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
                >
                  Forgot password?
                </button>
              )}
            </div>

            {/* Submit Button - Changes based on login method */}
            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {loginMethod === "phone" && !otpSent ? "Send OTP" : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white/80 backdrop-blur text-slate-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 py-3 bg-white border-2 border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group"
            >
              <FaGoogle className="text-red-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-600">Google</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 py-3 bg-white border-2 border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group"
            >
              <FaApple className="text-slate-700 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-600">Apple</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 py-3 bg-white border-2 border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group"
            >
              <FaFacebook className="text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-600">Facebook</span>
            </motion.button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <button className="text-emerald-600 font-semibold hover:text-emerald-800 transition-colors">
              Sign Up
            </button>
          </p>

        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <FaShieldAlt className="text-emerald-500 text-[10px]" />
              Secure
            </span>
            <span className="w-px h-3 bg-slate-300"></span>
            <span className="flex items-center gap-1">
              <FaLockIcon className="text-emerald-500 text-[10px]" />
              Encrypted
            </span>
            <span className="w-px h-3 bg-slate-300"></span>
            <span className="flex items-center gap-1">
              <FaCheckCircle className="text-emerald-500 text-[10px]" />
              2FA Ready
            </span>
          </div>
        </motion.div>

      </motion.div>
    </div>
    </>
  );
};

export default LoginForm;
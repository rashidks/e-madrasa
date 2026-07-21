import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";

import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

const AuthCard = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const mode = searchParams.get("mode");

  const [isLogin, setIsLogin] = useState(mode !== "register");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 p-6 overflow-hidden">

      <AnimatePresence mode="wait">

        <motion.div
          key={isLogin ? "login" : "register"}
          initial={{
            opacity: 0,
            rotateY: isLogin ? -90 : 90,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            rotateY: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            rotateY: isLogin ? 90 : -90,
            scale: 0.95,
          }}
          transition={{
            duration: 0.55,
          }}
          className="w-full max-w-md"
        >
          {isLogin ? (
            <LoginForm
              onSwitch={() => {
                setIsLogin(false);
                setSearchParams({ mode: "register" });
              }}
            />
          ) : (
            <RegisterForm
              onSwitch={() => {
                setIsLogin(true);
                setSearchParams({ mode: "login" });
              }}
            />
          )}
        </motion.div>

      </AnimatePresence>

    </div>
  );
};

export default AuthCard;
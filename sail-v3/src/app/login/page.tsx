"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Phone, Lock, ArrowRight } from "lucide-react";
import { api } from "@/lib/api";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1: Phone, 2: OTP
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // await api.getLoginOtp(phoneNumber); // Uncomment when real phone is used
      setStep(2);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-cyber p-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="orb w-[500px] h-[500px] bg-primary top-[-100px] left-[-100px]" />
      <div className="orb w-[400px] h-[400px] bg-secondary bottom-[-100px] right-[-100px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel w-full max-w-md p-10 rounded-3xl relative z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 border border-primary/30">
            <ShieldCheck className="w-10 h-10 text-primary glow-text" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">SAIL Portal</h1>
          <p className="text-slate-400 mt-2">Sign in to your student account</p>
        </div>

        <form onSubmit={step === 1 ? handleSendOtp : handleLogin} className="space-y-6">
          {step === 1 ? (
            <div className="space-y-4">
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 group transition-all"
              >
                {loading ? "Sending..." : "Get OTP"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
              >
                {loading ? "Verifying..." : "Login"}
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full text-slate-400 hover:text-white text-sm py-2 transition-colors"
              >
                Change Phone Number
              </button>
            </motion.div>
          )}
        </form>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            Problems logging in? <a href="#" className="text-primary hover:underline">Contact Support</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

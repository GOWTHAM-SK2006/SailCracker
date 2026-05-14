"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, GraduationCap, Calendar, Shield } from "lucide-react";

export default function ProfilePage() {
  const info = [
    { label: "Full Name", value: "Alex Chen", icon: User },
    { label: "Student ID", value: "SC10245", icon: GraduationCap },
    { label: "Email", value: "alex.chen@university.edu", icon: Mail },
    { label: "Phone", value: "+1 234 567 890", icon: Phone },
    { label: "Department", value: "Computer Science", icon: GraduationCap },
    { label: "Joining Date", value: "Aug 15, 2022", icon: Calendar },
    { label: "Address", value: "Silicon Valley, CA", icon: MapPin },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-10 rounded-3xl"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-white/5 pb-10 mb-10">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center overflow-hidden">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="absolute bottom-1 right-1 w-8 h-8 bg-emerald-500 rounded-full border-4 border-[#020617] flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl font-bold text-white mb-2">Alex Chen</h2>
            <p className="text-primary font-medium mb-4">Undergraduate Student • Year 3</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">Section A</span>
              <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">Regular Student</span>
              <span className="px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">Active Status</span>
            </div>
          </div>
          
          <button className="px-6 py-2 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all">
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {info.map((item, i) => (
            <div key={item.label} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-all">
                <item.icon className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                <p className="text-white font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 rounded-3xl"
        >
          <h3 className="text-xl font-bold text-white mb-6">Academic Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl">
              <span className="text-slate-400">Total Credits Earned</span>
              <span className="text-white font-bold">104 / 120</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl">
              <span className="text-slate-400">Current Semester</span>
              <span className="text-white font-bold">6th Semester</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl">
              <span className="text-slate-400">Backlogs</span>
              <span className="text-emerald-400 font-bold">None</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-panel p-8 rounded-3xl"
        >
          <h3 className="text-xl font-bold text-white mb-6">Security & Settings</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all text-left">
              <div>
                <p className="text-white font-medium">Two-Factor Authentication</p>
                <p className="text-xs text-slate-500">Enabled via Phone Number</p>
              </div>
              <div className="w-10 h-6 bg-primary rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all text-left">
              <div>
                <p className="text-white font-medium">Last Login Activity</p>
                <p className="text-xs text-slate-500">Today at 10:24 AM • Chrome Linux</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
    </svg>
  );
}

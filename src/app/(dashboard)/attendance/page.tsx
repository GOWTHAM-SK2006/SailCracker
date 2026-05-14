"use client";

import { motion } from "framer-motion";
import { 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Info,
  ChevronLeft,
  ChevronRight,
  TrendingUp
} from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const attendanceStats = [
  { label: "Total Classes", value: "156", icon: CalendarIcon, color: "text-blue-400" },
  { label: "Present", value: "138", icon: CheckCircle2, color: "text-emerald-400" },
  { label: "Absent", value: "12", icon: XCircle, color: "text-rose-400" },
  { label: "Late", value: "6", icon: Clock, color: "text-amber-400" },
];

const weeklyData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
  datasets: [
    {
      label: 'Attendance %',
      data: [92, 88, 95, 90, 85, 98, 92, 88],
      backgroundColor: 'rgba(139, 92, 246, 0.5)',
      borderRadius: 8,
      hoverBackgroundColor: '#8b5cf6',
    },
  ],
};

const attendanceLog = [
  { date: "Oct 26, 2023", subject: "Advanced Robotics", status: "Present", time: "10:00 AM", duration: "2h" },
  { date: "Oct 25, 2023", subject: "Digital Ethics", status: "Present", time: "02:00 PM", duration: "1h" },
  { date: "Oct 24, 2023", subject: "Cybernetics", status: "Absent", time: "11:30 AM", duration: "1.5h" },
  { date: "Oct 23, 2023", subject: "Machine Learning", status: "Late", time: "09:00 AM", duration: "2h" },
  { date: "Oct 22, 2023", subject: "Advanced Robotics", status: "Present", time: "10:00 AM", duration: "2h" },
];

export default function AttendancePage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Attendance Tracking</h2>
          <p className="text-slate-400">Detailed record of your class participation.</p>
        </div>
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-1 rounded-2xl">
          <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium shadow-lg shadow-primary/20">Monthly</button>
          <button className="px-4 py-2 text-slate-400 hover:text-white rounded-xl text-sm font-medium transition-colors">Weekly</button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {attendanceStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-white/5 rounded-lg">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Live</span>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Weekly Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 glass-panel p-8 rounded-3xl"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-primary w-5 h-5" />
              <h3 className="text-xl font-bold text-white">Attendance Trend</h3>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-500 hover:text-white transition-colors"><ChevronLeft /></button>
              <span className="text-sm text-slate-300">September - October</span>
              <button className="p-2 text-slate-500 hover:text-white transition-colors"><ChevronRight /></button>
            </div>
          </div>
          <div className="h-[300px]">
            <Bar
              data={weeklyData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' }, min: 0, max: 100 },
                  x: { grid: { display: false }, ticks: { color: '#64748b' } }
                }
              }}
            />
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center space-y-6"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
            <Info className="w-10 h-10 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Attendance Rule</h3>
            <p className="text-slate-400 mt-2 text-sm">
              You must maintain at least **75% attendance** across all courses to be eligible for final examinations.
            </p>
          </div>
          <div className="w-full p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
            <p className="text-emerald-400 text-sm font-semibold">Status: Eligible ✅</p>
            <p className="text-xs text-emerald-500/80 mt-1">Current average: 88.5%</p>
          </div>
        </motion.div>
      </div>

      {/* Attendance Log Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-panel rounded-3xl overflow-hidden"
      >
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">Recent Attendance Log</h3>
          <button className="text-sm text-primary hover:underline font-medium">Download Report (PDF)</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5">
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Subject</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Time</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {attendanceLog.map((log, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors group">
                  <td className="px-8 py-5 text-slate-300 font-medium">{log.date}</td>
                  <td className="px-8 py-5 text-white font-semibold">{log.subject}</td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      log.status === "Present" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                      log.status === "Absent" ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" :
                      "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    }`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-slate-400 text-sm">{log.time}</td>
                  <td className="px-8 py-5 text-slate-400 text-sm">{log.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

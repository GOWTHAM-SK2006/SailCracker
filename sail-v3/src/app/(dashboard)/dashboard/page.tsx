"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award,
  ChevronRight,
  Clock
} from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

const stats = [
  { label: "Overall Attendance", value: "88%", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { label: "Active Courses", value: "6", icon: BookOpen, color: "text-blue-400", bg: "bg-blue-400/10" },
  { label: "Upcoming Exams", value: "3", icon: Clock, color: "text-amber-400", bg: "bg-amber-400/10" },
  { label: "GPA Score", value: "3.82", icon: Award, color: "text-purple-400", bg: "bg-purple-400/10" },
];

const attendanceData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      fill: true,
      label: 'Attendance Rate',
      data: [85, 92, 88, 95, 82, 90],
      borderColor: '#8b5cf6',
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
      tension: 0.4,
    },
  ],
};

const courses = [
  { name: "Advanced Robotics", progress: 72, color: "bg-primary" },
  { name: "Digital Ethics", progress: 89, color: "bg-emerald-500" },
  { name: "Cybernetics", progress: 65, color: "bg-blue-500" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-white mb-2"
        >
          Welcome Back, Alex Chen! 👋
        </motion.h2>
        <p className="text-slate-400">Here's what's happening with your studies today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-2xl flex items-center gap-4"
          >
            <div className={`p-3 rounded-xl ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Attendance Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 glass-panel p-8 rounded-3xl"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white">Attendance Overview</h3>
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-sm text-slate-300">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px]">
            <Line 
              data={attendanceData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
                  x: { grid: { display: false }, ticks: { color: '#64748b' } }
                }
              }} 
            />
          </div>
        </motion.div>

        {/* Course Progress */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-panel p-8 rounded-3xl"
        >
          <h3 className="text-xl font-bold text-white mb-8">My Courses</h3>
          <div className="space-y-6">
            {courses.map((course) => (
              <div key={course.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">{course.name}</span>
                  <span className="text-primary font-medium">{course.progress}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${course.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors py-2 border border-white/5 rounded-xl hover:bg-white/5">
            View All Courses <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Upcoming Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-panel p-8 rounded-3xl"
        >
          <h3 className="text-xl font-bold text-white mb-6">Upcoming Exams</h3>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-4 p-4 glass-card rounded-2xl">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex flex-col items-center justify-center border border-white/10">
                  <span className="text-xs text-slate-400 uppercase">Oct</span>
                  <span className="text-lg font-bold text-white">{28 + i}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium">Data Structures Midterm</h4>
                  <p className="text-sm text-slate-500">10:00 AM - 12:00 PM • Room C12</p>
                </div>
                <button className="text-slate-500 hover:text-white transition-colors">
                  <ChevronRight />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-panel p-8 rounded-3xl"
        >
          <h3 className="text-xl font-bold text-white mb-6">Recent Activities</h3>
          <div className="space-y-6">
            {[
              { type: "Assignment", title: "ML Quiz Submitted", time: "2 hours ago" },
              { type: "Grade", title: "A+ in Digital Logic", time: "Yesterday" },
              { type: "Notice", title: "Fee Receipt Generated", time: "2 days ago" },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                <div>
                  <h4 className="text-slate-200 text-sm font-medium">{activity.title}</h4>
                  <p className="text-xs text-slate-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

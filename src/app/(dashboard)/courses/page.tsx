"use client";

import { motion } from "framer-motion";
import { Book, FileText, PlayCircle, Star, Search, Filter } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Advanced Robotics & AI",
    instructor: "Dr. Sarah Miller",
    progress: 72,
    rating: 4.8,
    modules: 12,
    completedModules: 8,
    category: "Engineering",
    image: "🤖"
  },
  {
    id: 2,
    title: "Digital Ethics in Computing",
    instructor: "Prof. James Wilson",
    progress: 89,
    rating: 4.9,
    modules: 8,
    completedModules: 7,
    category: "Ethics",
    image: "⚖️"
  },
  {
    id: 3,
    title: "Cybernetics & Systems",
    instructor: "Dr. Elena Rossi",
    progress: 65,
    rating: 4.5,
    modules: 15,
    completedModules: 10,
    category: "Computer Science",
    image: "🌐"
  },
  {
    id: 4,
    title: "Machine Learning Foundations",
    instructor: "Prof. Andrew Ng",
    progress: 45,
    rating: 5.0,
    modules: 20,
    completedModules: 9,
    category: "Data Science",
    image: "🧠"
  }
];

export default function CoursesPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">My Courses</h2>
          <p className="text-slate-400">Manage and track your academic progress.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search courses..."
              className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 w-64"
            />
          </div>
          <button className="p-2 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel group overflow-hidden rounded-3xl flex flex-col"
          >
            <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-6xl relative">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              {course.image}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-xs font-bold text-white">{course.rating}</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4">
                <span className="text-[10px] uppercase tracking-wider text-primary font-bold px-2 py-1 rounded-md bg-primary/10 border border-primary/20">
                  {course.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-3 group-hover:text-primary transition-colors line-clamp-1">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">By {course.instructor}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Progress</span>
                  <span className="text-white font-bold">{course.progress}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-primary"
                  />
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Book className="w-3 h-3" /> {course.modules} Modules
                  </div>
                  <div className="flex items-center gap-1">
                    <PlayCircle className="w-3 h-3" /> {course.completedModules} Completed
                  </div>
                </div>
              </div>

              <button className="mt-auto w-full py-3 bg-white/5 hover:bg-primary hover:text-white transition-all text-slate-300 font-semibold rounded-xl border border-white/10 hover:border-primary flex items-center justify-center gap-2">
                Continue Learning <PlayCircle className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

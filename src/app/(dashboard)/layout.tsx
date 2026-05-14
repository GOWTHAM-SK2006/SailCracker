"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  User, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  CreditCard,
  Settings as SettingsIcon,
  HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: BookOpen, label: "Courses", href: "/courses" },
  { icon: Calendar, label: "Attendance", href: "/attendance" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: CreditCard, label: "Fees", href: "/fees" },
  { icon: HelpCircle, label: "Help", href: "/help" },
];

const notifications = [
  { id: 1, title: "New Assignment", message: "Robotics Phase 1 due in 2 days", time: "5m ago", type: "assignment" },
  { id: 2, title: "Attendance Update", message: "Your attendance in ML is 88%", time: "1h ago", type: "attendance" },
  { id: 3, title: "Grade Posted", message: "You got an A in Digital Ethics", time: "3h ago", type: "grade" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#020617] flex">
      {/* Background Glows */}
      <div className="orb w-[600px] h-[600px] bg-primary/10 top-0 left-0" />
      <div className="orb w-[600px] h-[600px] bg-secondary/10 bottom-0 right-0" />

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isOpen ? 280 : 80 }}
        className="glass-panel h-screen sticky top-0 flex flex-col z-50 border-r border-white/5"
      >
        <div className="p-6 flex items-center gap-4 mb-8">
          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <BookOpen className="text-primary w-6 h-6" />
          </div>
          {isOpen && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-white tracking-tight"
            >
              SAIL v3
            </motion.span>
          )}
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.label} href={item.href}>
                <div className={`
                  flex items-center gap-4 p-4 rounded-xl transition-all relative group
                  ${isActive ? 'bg-primary/20 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}
                `}>
                  <item.icon className={`w-6 h-6 ${isActive ? 'text-primary' : ''}`} />
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute left-0 w-1 h-8 bg-primary rounded-r-full"
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="flex items-center gap-4 p-4 w-full text-slate-400 hover:text-rose-400 transition-colors">
            <LogOut className="w-6 h-6" />
            {isOpen && <span>Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 sticky top-0 bg-[#020617]/50 backdrop-blur-md z-40">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400 hover:text-white">
            {isOpen ? <X /> : <Menu />}
          </button>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 w-64"
              />
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                <Bell className="w-6 h-6" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#020617]"></span>
              </button>

              <AnimatePresence>
                {showNotifications && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-4 w-80 glass-panel rounded-2xl overflow-hidden z-50 shadow-2xl"
                    >
                      <div className="p-4 border-b border-white/5 flex items-center justify-between">
                        <h4 className="text-white font-bold text-sm">Notifications</h4>
                        <button className="text-[10px] text-primary hover:underline">Mark all read</button>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map((n) => (
                          <div key={n.id} className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start mb-1">
                              <h5 className="text-white text-xs font-semibold group-hover:text-primary transition-colors">{n.title}</h5>
                              <span className="text-[10px] text-slate-500">{n.time}</span>
                            </div>
                            <p className="text-[11px] text-slate-400 leading-relaxed">{n.message}</p>
                          </div>
                        ))}
                      </div>
                      <button className="w-full p-3 text-xs text-slate-500 hover:text-white transition-colors border-t border-white/5 bg-white/5">
                        View All Notifications
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-white">Alex Chen</p>
                <p className="text-xs text-slate-500">Student ID: SC10245</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px]">
                <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center">
                  <User className="text-white w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

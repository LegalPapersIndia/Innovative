import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Image,
  Users,
  Quote,
  ShieldCheck,
  Mail,
  Settings,
  X,
  Sprout,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Products", path: "/products", icon: Package },
  { name: "Gallery", path: "/gallery", icon: Image },
  { name: "Enquiries", path: "/enquiries", icon: Mail },
  { name: "Profile Settings", path: "/profile", icon: Settings },
];

const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 z-50 w-72 h-screen bg-green-950 text-white lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-amber-400/15 flex items-center justify-center">
                  <Sprout size={18} className="text-amber-400" />
                </div>
                <p className="font-display text-sm font-medium">
                  Admin Panel
                </p>
              </div>
              <button onClick={onClose} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            <nav className="px-3 py-6 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-amber-400 text-green-950"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <item.icon size={18} />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;
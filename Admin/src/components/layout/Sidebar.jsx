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
  Sprout,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Products", path: "/products", icon: Package },
  { name: "Gallery", path: "/gallery", icon: Image },
  { name: "Enquiries", path: "/enquiries", icon: Mail },
  { name: "Profile Settings", path: "/profile", icon: Settings },
];

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 bg-green-950 text-white">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-6 border-b border-white/10">
        <div className="w-9 h-9 rounded-lg bg-amber-400/15 flex items-center justify-center">
          <Sprout size={18} className="text-amber-400" />
        </div>
        <div>
          <p className="font-display text-sm font-medium leading-tight">
            Innovative Nature
          </p>
          <p className="font-mono text-[10px] tracking-widest uppercase text-white/40">
            Admin Panel
          </p>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
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

      <div className="px-6 py-4 border-t border-white/10">
        <p className="font-mono text-[10px] text-white/30">
          © {new Date().getFullYear()} INP Admin
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
import { useState } from "react";
import { LogOut, Menu, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Topbar = ({ onMenuClick }) => {
  const { admin, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between bg-white border-b border-gray-100 px-4 sm:px-6 py-4">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-green-950"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      <div className="hidden lg:block" />

      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-3 px-3 py-1.5 rounded-full hover:bg-gray-50 transition-colors"
        >
          <div className="w-9 h-9 rounded-full bg-green-950 flex items-center justify-center">
            <User size={16} className="text-amber-400" />
          </div>
          <span className="hidden sm:block text-sm font-medium text-green-950">
            {admin?.name}
          </span>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
            <p className="px-4 py-2 text-xs text-gray-400 truncate border-b border-gray-50">
              {admin?.email}
            </p>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={15} />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
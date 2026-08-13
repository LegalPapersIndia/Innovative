import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Package,
  Image,
  Mail,
  TrendingUp,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { getAllProductsAdmin } from "../api/productApi";
import { getAllGalleryAdmin } from "../api/galleryApi";
import { getEnquiries } from "../api/enquiryApi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { admin } = useAuth();
  const [stats, setStats] = useState({
    products: 0,
    gallery: 0,
    enquiries: 0,
    newEnquiries: 0,
  });
  const [recentEnquiries, setRecentEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsRes, galleryRes, enquiriesRes] = await Promise.all([
          getAllProductsAdmin(),
          getAllGalleryAdmin(),
          getEnquiries(),
        ]);

        const enquiries = enquiriesRes.data.enquiries;

        setStats({
          products: productsRes.data.products.length,
          gallery: galleryRes.data.images.length,
          enquiries: enquiries.length,
          newEnquiries: enquiries.filter((e) => e.status === "New").length,
        });

        setRecentEnquiries(enquiries.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch dashboard stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      label: "Total Products",
      value: stats.products,
      icon: Package,
      link: "/products",
    },
    {
      label: "Gallery Images",
      value: stats.gallery,
      icon: Image,
      link: "/gallery",
    },
    {
      label: "Total Enquiries",
      value: stats.enquiries,
      icon: Mail,
      link: "/enquiries",
    },
    {
      label: "New Enquiries",
      value: stats.newEnquiries,
      icon: TrendingUp,
      link: "/enquiries",
      highlight: stats.newEnquiries > 0,
    },
  ];

  const statusColors = {
    New: "bg-amber-50 text-amber-700 border-amber-200",
    Contacted: "bg-blue-50 text-blue-700 border-blue-200",
    Closed: "bg-gray-100 text-gray-500 border-gray-200",
  };

  return (
    <div>
      {/* Welcome header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-green-950 rounded-3xl p-6 sm:p-8 mb-8 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-green-400/10 rounded-full blur-3xl -z-0" />
        <div
          className="absolute inset-0 opacity-[0.03] -z-0"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative">
          <p className="font-mono text-xs tracking-widest uppercase text-amber-300 mb-2">
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1 className="font-display text-2xl sm:text-3xl text-white mb-1">
            Welcome back, {admin?.name?.split(" ")[0]} 👋
          </h1>
          <p className="text-white/50 text-sm">
            Here's what's happening with your website today.
          </p>
        </div>
      </motion.div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
           <Link
              to={stat.link}
              className={`group block bg-green-950 rounded-2xl border p-5 hover:bg-green-100 hover:shadow-lg transition-all duration-300 overflow-hidden ${
                stat.highlight ? "border-amber-400/40" : "border-green-900"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    stat.highlight ? "bg-amber-400/15 group-hover:bg-amber-50" : "bg-white/10 group-hover:bg-green-50"
                  }`}
                >
                  <stat.icon
                    size={20}
                    className={`transition-colors duration-300 ${
                      stat.highlight
                        ? "text-amber-400 group-hover:text-amber-500"
                        : "text-amber-400 group-hover:text-green-700"
                    }`}
                  />
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-white/30 group-hover:text-green-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />
              </div>
              <p className="font-display text-3xl text-white group-hover:text-green-950 mb-1 transition-colors duration-300">
                {loading ? "—" : stat.value}
              </p>
              <p className="text-white/50 group-hover:text-gray-500 text-sm transition-colors duration-300">
                {stat.label}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Recent enquiries */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="font-display text-lg text-green-950">
            Recent Enquiries
          </h2>
          <Link
            to="/enquiries"
            className="text-sm text-green-700 font-medium hover:text-green-800 flex items-center gap-1"
          >
            View All
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-4 border-green-800 border-t-amber-400 rounded-full animate-spin" />
          </div>
        ) : recentEnquiries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Mail size={28} className="text-gray-300 mb-3" />
            <p className="text-gray-400 text-sm">No enquiries yet.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {recentEnquiries.map((enq) => (
              <div
                key={enq._id}
                className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-green-950 truncate">
                      {enq.name}
                    </p>
                    <span
                      className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium border ${statusColors[enq.status]}`}
                    >
                      {enq.status}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm truncate">
                    {enq.message}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs shrink-0">
                  <Clock size={12} />
                  {new Date(enq.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Dashboard;
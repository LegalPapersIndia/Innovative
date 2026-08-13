import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Trash2, MailOpen } from "lucide-react";
import { getEnquiries, updateEnquiryStatus, deleteEnquiry } from "../api/enquiryApi";

const statusColors = {
  New: "bg-amber-50 text-amber-700 border-amber-200",
  Contacted: "bg-blue-50 text-blue-700 border-blue-200",
  Closed: "bg-gray-100 text-gray-500 border-gray-200",
};

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [deleteTarget, setDeleteTarget] = useState(null);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const { data } = await getEnquiries();
      setEnquiries(data.enquiries);
    } catch (error) {
      console.error("Failed to fetch enquiries", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateEnquiryStatus(id, status);
      fetchEnquiries();
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteEnquiry(deleteTarget._id);
      setDeleteTarget(null);
      fetchEnquiries();
    } catch (error) {
      console.error("Failed to delete enquiry", error);
    }
  };

  const filteredEnquiries =
    filter === "All" ? enquiries : enquiries.filter((e) => e.status === filter);

  const newCount = enquiries.filter((e) => e.status === "New").length;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl text-green-950 mb-1">
            Enquiries
          </h1>
          <p className="text-gray-500 text-sm">
            {newCount > 0 ? `${newCount} new enquiries` : "All caught up"}
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", "New", "Contacted", "Closed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === status
                ? "bg-green-800 text-white"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <div className="w-8 h-8 border-4 border-green-800 border-t-amber-400 rounded-full animate-spin" />
        </div>
      ) : filteredEnquiries.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-gray-100 text-center">
          <MailOpen size={32} className="text-gray-300 mb-3" />
          <p className="text-gray-400">No enquiries found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredEnquiries.map((enq) => (
            <motion.div
              key={enq._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-lg text-green-950">
                      {enq.name}
                    </h3>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[enq.status]}`}
                    >
                      {enq.status}
                    </span>
                    {enq.product && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                        {enq.product}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                    <a
                      href={`mailto:${enq.email}`}
                      className="flex items-center gap-1.5 hover:text-green-700"
                    >
                      <Mail size={14} /> {enq.email}
                    </a>
                    {enq.phone && (
                      <a
                        href={`tel:${enq.phone}`}
                        className="flex items-center gap-1.5 hover:text-green-700"
                      >
                        <Phone size={14} /> {enq.phone}
                      </a>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {enq.message}
                  </p>

                  <p className="text-xs text-gray-400">
                    {new Date(enq.createdAt).toLocaleString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                <div className="flex sm:flex-col items-center gap-2 shrink-0">
                  <select
                    value={enq.status}
                    onChange={(e) => handleStatusChange(enq._id, e.target.value)}
                    className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-amber-400 outline-none"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Closed">Closed</option>
                  </select>
                  <button
                    onClick={() => setDeleteTarget(enq)}
                    className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {deleteTarget && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-sm w-full"
          >
            <h3 className="font-display text-lg text-green-950 mb-2">
              Delete Enquiry?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 py-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Enquiries;
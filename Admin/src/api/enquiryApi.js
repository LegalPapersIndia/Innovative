import api from "./axios";

export const getEnquiries = () => api.get("/enquiries");
export const updateEnquiryStatus = (id, status) => api.put(`/enquiries/${id}`, { status });
export const deleteEnquiry = (id) => api.delete(`/enquiries/${id}`);
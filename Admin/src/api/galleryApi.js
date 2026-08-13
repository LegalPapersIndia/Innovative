import api from "./axios";

export const getAllGalleryAdmin = () => api.get("/gallery/admin/all");

export const uploadGalleryImages = (formData) =>
  api.post("/gallery", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateGalleryImage = (id, data) => api.put(`/gallery/${id}`, data);

export const deleteGalleryImage = (id) => api.delete(`/gallery/${id}`);
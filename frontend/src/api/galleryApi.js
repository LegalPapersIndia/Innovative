import api from "./axios";

export const getGalleryImages = () => api.get("/gallery");
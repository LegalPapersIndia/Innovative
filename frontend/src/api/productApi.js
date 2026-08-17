import api from "./axios";

export const getProducts = () => api.get("/products");
export const getProductBySlug = (slug) => api.get(`/products/${slug}`);
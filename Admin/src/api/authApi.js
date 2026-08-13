import api from "./axios";

export const updateProfile = (data) => api.put("/auth/update-profile", data);
export const updatePassword = (data) => api.put("/auth/update-password", data);
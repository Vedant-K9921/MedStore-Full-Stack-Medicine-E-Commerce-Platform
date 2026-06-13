import axios from "axios";

const API_URL =
  "http://localhost:8080/api/medicines";

const getAuthHeader = () => {

  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getAllMedicines = async () => {

  return await axios.get(
    API_URL,
    getAuthHeader()
  );
};

export const addMedicine = async (medicine) => {

  return await axios.post(
    API_URL,
    medicine,
    getAuthHeader()
  );
};

export const deleteMedicine = async (id) => {

  return await axios.delete(
    `${API_URL}/${id}`,
    getAuthHeader()
  );
};

export const updateMedicine = async (
  id,
  medicine
) => {

  return await axios.put(
    `${API_URL}/${id}`,
    medicine,
    getAuthHeader()
  );
};
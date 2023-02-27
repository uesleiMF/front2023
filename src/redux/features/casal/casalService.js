import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/casais/`;

// Create New Product
const createCasal = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

// Get all products
const getCasais = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Product
const deleteCasal = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
// Get a Product
const getCasal = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};
// Update Product
const updateCasal = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const casalService = {
  createCasal: createCasal,
  getCasais: getCasais,
  getCasal: getCasal,
  deleteCasal: deleteCasal,
  updateCasal: updateCasal,
};

export default casalService;

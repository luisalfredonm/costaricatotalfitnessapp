import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/clients/`;


// Create New Product
const createClient = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

// Get all clients
const getClients = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Client
const deleteClient = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
// Get a Client
const getClient = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};
// Update Client
const updateClient = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const clientService = {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};

export default clientService;

import axios from 'axios';
import { BASE_URL } from './config'
const PETS = axios.create({
    baseURL: BASE_URL + 'pets/api/'
})

/**
 * Obtiene la lista de mascotas desde el servidor.
 *
 * @async
 * @function
 * @returns {Promise<Array>} La lista de mascotas.
 * @throws {Error} Si ocurre un error al obtener la lista de mascotas.
 */
async function getPets() {
  try {
    const response = await PETS.get('pets/');
    return response.data;
  } catch (error) {
    throw error;
  }
}

/**
 * Crea una nueva mascota en el servidor.
 * @param {Object} petData - Los datos de la mascota a crear.
 * @returns {Promise<Object>} - Una promesa que resuelve con los datos de la mascota creada.
 * @throws {Error} - Si ocurre un error al crear la mascota.
 */
async function createPet(petData) {
  try {
    const response = await PETS.post('pets/', petData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

/**
 * Obtiene la información de una mascota por su ID.
 *
 * @param {number} id - El ID de la mascota a buscar.
 * @returns {Promise<Object>} - Una promesa que se resuelve con la información de la mascota.
 * @throws {Error} - Si hay un error al realizar la solicitud.
 */
async function getPetById(id) {
  try {
    const response = await PETS.get(`pets/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Función para actualizar los detalles de una mascota por ID
/**
 * Actualiza la información de una mascota en el servidor.
 * @param {number} id - El ID de la mascota a actualizar.
 * @param {Object} petData - Los datos de la mascota a actualizar.
 * @returns {Promise<Object>} - Una promesa que resuelve con los datos actualizados de la mascota.
 * @throws {Error} - Si hay un error al actualizar la mascota.
 */
async function updatePet(id, petData) {
  try {
    const response = await PETS.put(`pets/${id}/`, petData);
    return response.data;
  } catch (error) {
    throw error;
  }
}


/**
 * Elimina una mascota de la base de datos.
 *
 * @async
 * @function
 * @param {number} id - El ID de la mascota a eliminar.
 * @throws {Error} Si hay un error al eliminar la mascota.
 * @returns {Promise<Object>} Un objeto que representa la mascota eliminada.
 */
async function deletePet(id) {
  try {
    const response = await PETS.delete(`pets/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

/**
 * Obtiene la lista de mascotas de la organización.
 * @async
 * @function
 * @returns {Promise<Array>} - Una promesa que resuelve en un array de objetos que representan las mascotas de la organización.
 * @throws {Error} - Si ocurre un error al realizar la petición.
 */
async function getOrganizationPets() {
  try {
    const response = await PETS.get('pets/organization/');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const recoverPassword = (email) => PETS.get('/recoverPassword/')

export const setNewPassword = (email) => PETS.get('/recoverPassword/')

export {
  getPets,
  createPet,
  getPetById,
  updatePet,
  deletePet,
  getOrganizationPets,
};

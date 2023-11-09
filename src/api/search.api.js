import { BASE_URL, DEBUG, DOCKER_MODE, RENDER_MODE, UNPetAxios } from './config'


/**
 * API para manejar las publicaciones y comentarios de la aplicación UNPet.
 * @module postsAPI
 */
BASE_RUTA='/search/api/'

const SEARCH = new UNPetAxios(BASE_RUTA)
SEARCH.init()



/**
 * MOTOR DE BÚSQUEDA, puede buscar personas, organizaciones y publicaciones.
 * @function
 * @async
 * @param {string} query - La cadena de búsqueda.
 * @returns {Promise<Object>} Objeto con los resultados de la búsqueda y los datos de paginación (results, next, previous).
 */
export async function searchGeneral(query) {
    const response = await SEARCH.get(`/general/?q=${query}`);
    return response.data;
}



/**
 * Busca publicaciones.
 * @function
 * @async
 * @param {string} query - La cadena de búsqueda.
 * @returns {Promise<Object>} Objeto con los resultados de la búsqueda y los datos de paginación (results, next, previous).
 */
export async function searchPublicaciones(query) {
    const response = await SEARCH.get(`/posts/?q=${query}`);
    return response.data;
}



/**
 * Busca usuarios.
 * @function
 * @async
 * @param {string} query - La cadena de búsqueda.
 * @returns {Promise<Object>} Objeto con los resultados de la búsqueda y los datos de paginación (results, next, previous).
 */
export async function searchPublicaciones(query) {
    const response = await SEARCH.get(`/users/?q=${query}`);
    return response.data;
}




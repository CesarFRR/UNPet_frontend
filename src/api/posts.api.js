import { BASE_URL, DEBUG, DOCKER_MODE, RENDER_MODE, UNPetAxios } from './config'


/**
 * API para manejar las publicaciones y comentarios de la aplicación UNPet.
 * @module postsAPI
 */
BASE_RUTA='/posts/api/posts'

const POSTS = new UNPetAxios(BASE_RUTA)
POSTS.init()



/*NOTAS: ASI SE USAN LAS FUNCIONES QUE IMPLEMENTAN
PAGINACION, PARA APLICARLAS AL FEED Y
RESULTADOS DE BUSQUEDA*/
// Uso de la función
/*
const { results, next, previous } = await getResultadosPaginacionEjemplo();

// Para obtener la siguiente página de resultados
if (next) {
    const { results, next, previous } = await getResultadosPaginacionEjemplo(next);
}

// Para obtener la página anterior de resultados
if (previous) {
    const { results, next, previous } = await getResultadosPaginacionEjemplo(previous);
}
*/


/**
 * Obtiene la lista de publicaciones recientes.
 * @function
 * @async
 * @returns {Promise<Object>} Objeto con los resultados de la paginación (results, next, previous).
 */
export async function getPostsRecent() {
    const response = await POSTS.get('/recent/');
    return response.data;
}

/**
 * Obtiene la lista de publicaciones tendencia.
 * @function
 * @async
 * @returns {Promise<Object>} Objeto con los resultados de la paginación (results, next, previous).
 */
export async function getPoststrend() {
    const response = await POSTS.get('/trend/');
    return response.data;
}

/**
 * Obtiene una publicación específica.
 * @function
 * @async
 * @param {number} id - El ID de la publicación a obtener.
 * @returns {Promise<Object>} Objeto con los datos de la publicación.
 */
export async function getPost(id) {
    const response = await POSTS.get(`/${id}`);
    return response.data;
}



export async function createPost(data) {
    if(data && data.post && data.pets){
    const response = await POSTS.post(`/create/`, data);
    return response.data;
    }else{
        console.log("Error al crear la publicacion")
    }
}

/**
 * Obtiene la lista de comentarios de una publicación.
 * @function
 * @async
 * @param {number} id - El ID de la publicación.
 * @returns {Promise<Array>} Lista de comentarios de la publicación.
 */
export async function getComments(id) {
    const response = await POSTS.get(`/${id}/comments/`);
    return response.data;
}

/**
 * Crea un nuevo comentario para una publicación.
 * @function
 * @async
 * @param {number} id - El ID de la publicación.
 * @param {Object} data - Objeto con los datos del comentario (texto, autor).
 * @returns {Promise<Object>} Objeto con los datos del comentario creado.
 */
export async function createComment(id, data) {
    const response = await POSTS.post(`/${id}/comments/`, data);
    return response.data;
}



/**
 * Obtiene un comentario específico.
 * @function
 * @async
 * @param {number} postId - El ID de la publicación.
 * @param {number} commentId - El ID del comentario.
 * @returns {Promise<Object>} Objeto con los datos del comentario.
 */
export async function getComentario(postId, commentId) {
    const response = await POSTS.get(`/${postId}/comments/${commentId}`);
    return response.data;
}

/**
 * Actualiza un comentario.
 * @function
 * @async
 * @param {number} postId - El ID de la publicación.
 * @param {number} commentId - El ID del comentario.
 * @param {Object} data - Objeto con los datos del comentario a actualizar (texto, autor).
 * @returns {Promise<Object>} Objeto con los datos del comentario actualizado.
 */
export async function updateComentario(postId, commentId, data) {
    const response = await POSTS.put(`/${postId}/comments/${commentId}`, data);
    return response.data;
}

/**
 * Elimina un comentario.
 * @function
 * @async
 * @param {number} postId - El ID de la publicación.
 * @param {number} commentId - El ID del comentario.
 * @returns {Promise<Object>} Objeto con los datos del comentario eliminado.
 */
export async function deleteComentario(postId, commentId) {
    const response = await POSTS.delete(`/${postId}/comments/${commentId}`);
    return response.data;
}

/**
 * Obtiene las respuestas a un comentario.
 * @function
 * @async
 * @param {number} postId - El ID de la publicación.
 * @param {number} commentId - El ID del comentario.
 * @returns {Promise<Array>} Lista de respuestas al comentario.
 */
export async function getRespuestas(postId, commentId) {
    const response = await POSTS.get(`/${postId}/comments/${commentId}/respuestas/`);
    return response.data;
}

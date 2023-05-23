import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://646be9c67b42c06c3b2a91a0.mockapi.io/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async cargarLista() {
        try {
            const response = await apiClient.get('/Habitaciones');
            return response.data
        } catch (error) {
            throw "Error de conexion"
        }
    },

    async agregar(elemento) {
        try {
            await apiClient.post('/Habitaciones', elemento);
        } catch (error) {
            throw "Error de conexion"
        }
    },

    async eliminar(id) {
        try {
            await apiClient.delete('/Habitaciones/' + id);
        } catch (error) {
            throw "Error de conexion"
        }
     },

    async modificar(id, elemento) { 
        try {
            await apiClient.put('/Habitaciones/' + id, elemento);
        } catch (error) {
            throw "Error de conexion"
        }

    }

}
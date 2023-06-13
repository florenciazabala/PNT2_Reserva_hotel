import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://646c1ca37b42c06c3b2abb2c.mockapi.io/reserva_habitaciones',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async cargarLista() {
        try {
            const response = await apiClient.get('/reservar');
            return response.data
        } catch (error) {
            throw "Error de conexion"
        }
    },

    async agregar(elemento) {
        console.log('Reserva: ',elemento)
        try {
            await apiClient.post('/reservar', elemento);
        } catch (error) {
            throw "Error de conexion"
        }
    },

    async eliminar(id) {
        try {
            await apiClient.delete('/reservar/' + id);
        } catch (error) {
            throw "Error de conexion"
        }
     },

    async modificar(id, elemento) { 
        try {
            await apiClient.put('/reservar/' + id, elemento);
        } catch (error) {
            throw "Error de conexion"
        }

    }

}
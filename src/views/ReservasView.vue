<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h2>Reservas</h2>
      <ion-list class="listNegro" v-for="e in lista" :key="e.idReserva">
        <ion-card color="dark">
          <div style="height: 10px;" :style="{ 'background-color': Date.parse(e.fechaFin) < new Date() ? 'red' : 'blue' }">
          </div>
          <ion-card-header>
            <ion-card-title>Reserva #{{ e.idReserva }}</ion-card-title>
            <ion-card-subtitle>Inicio: {{ e.fechaInicio }} | Fin: {{ e.fechaFin }}</ion-card-subtitle>
          </ion-card-header>


          <!-- e.habitacion.id y e.habitacion.foto estan rompiendo, dice que no existe aunque lo esta mostrando y rompe la pagina haciendo que no pueda ir a otras vistas o tocar algun boton -->
          <ion-card-content>
            <!-- Habitación: {{ e.habitacion.id }} -->
            <ion-list class="listNegro">
              <ion-item color="dark">
                <ion-thumbnail slot="start">
                  <!-- <img alt="Foto habitación" :src="e.habitacion.foto" /> -->
                </ion-thumbnail>
                <ion-label>Item</ion-label>
              </ion-item>
            </ion-list>
          </ion-card-content>

          <div style="width: 80%; padding: 10px;">
            <ion-progress-bar
              :value="
                isWhatPercentOf(diasRestantes(Date.parse(e.fechaInicio), Date.parse(e.fechaFin)), dateDiff(Date.parse(e.fechaInicio), Date.parse(e.fechaFin)))"
              :buffer="isWhatPercentOf(diasRestantes(Date.parse(e.fechaInicio), Date.parse(e.fechaFin)), dateDiff(Date.parse(e.fechaInicio), Date.parse(e.fechaFin))) - 1"
              color="light">
            </ion-progress-bar> Días restantes: {{ dateDiff(Date.parse(e.fechaInicio), Date.parse(e.fechaFin)) -
              diasRestantes(Date.parse(e.fechaInicio), Date.parse(e.fechaFin)) }}
          </div>

          <ion-button color="danger" @click="eliminar(e.idReserva)" fill="clear">Eliminar</ion-button>
          <ion-button @click="modificar(e.idReserva)" fill="clear">Modificar</ion-button>

        </ion-card>

      </ion-list>
      <ion-button color="light" fill="outline" @click="cargarLista">Cargar Lista</ion-button>
      <ion-button color="light" fill="outline" @click="agregaraLista">Agregar</ion-button>
      <ion-button color="light" fill="outline" @click="ordenarLista">Ordenar</ion-button>
      <ion-button color="light" fill="outline" @click="iraHome">Ir a home</ion-button>
    </ion-content>
   </ion-page>
</template>
  
<script>
import { IonPage, IonButton, IonContent, IonInput, IonList, IonProgressBar, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonThumbnail, IonLabel, IonItem} from '@ionic/vue'
import axios from 'axios'
import reservas from '../services/reservas'
import { defineComponent, ref } from 'vue';

export default {
  components: { IonPage, IonButton, IonContent, IonInput, IonList, IonProgressBar, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonThumbnail, IonLabel, IonItem },
  methods: {
    iraHome() {
      this.$router.push("/")
    },
    async agregaraLista() {
      // Falta control de ingreso de datos
      try {
        const elemento = { ...this.elemento }
        await reservas.agregar(elemento)
        await this.cargarLista()
        this.elemento = {}
      } catch (e) {
        alert(e)
      }
    },
    ordenarLista() {
      this.lista.sort((a, b) => a.id - b.id)
    },
    async cargarLista() {
      try {
        const respuesta = await reservas.cargarLista()
        this.lista = respuesta
      } catch (e) {
        alert(e)
      }
    },
    async eliminar(id) {
      try {
        await reservas.eliminar(id)
        await this.cargarLista()
      } catch (e) {
        alert('Se produjo un error')
      }
    },
    async modificar(id) {
      try {
        const elemento = { ...this.elemento }
        await reservas.modificar(id, elemento)
        await this.cargarLista()
        this.elemento = {}
      } catch (e) {
        alert('Se produjo un error')
      }
    },
    dateDiff(first, second) {
      return Math.round((second - first) / (1000 * 60 * 60 * 24));
    },
    diasRestantes(fechaInicio, fechaFin) {
      let diasHastaActualidad = this.dateDiff(fechaInicio, new Date());
      let diasTotales = this.dateDiff(fechaInicio, fechaFin);
      if (diasHastaActualidad < 0) {
        return 0;
      } else {
        return diasHastaActualidad > diasTotales ? diasTotales : diasHastaActualidad;
      }
    },
    isWhatPercentOf(x, y) {
      return (x / y);
    }
  },
  data() {
    return {
      lista: [],
      elemento: {},
      ocultar: true,
      colorDate: 'white'
    }
  },
  setup(){
    let progress = ref(0);
    return {progress};
  },
  mounted() {
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 0.5) {
        setTimeout(() => {
          return;
        }, 1000);
      }
    }, 50);
  },
}
</script>
  
<style></style>


<!--"cantPersonas": 8,
"EsPremium": false,
"imagen": "",
"NumeroDeHabitacion": "2",
"Precio": 10000,
"id": "2"
}"-->
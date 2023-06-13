<template>
  <ion-page>
  </ion-page>
  <ion-content class="ion-padding">
    <form method="post">
      <ion-row>
        <ion-col>
          <ion-label class="letraBlanca">Fecha desde</ion-label>
          <ion-datetime-button displayFormat="DD:MM:YYYY" datetime="fechaDesde"></ion-datetime-button>

          <ion-modal :keep-contents-mounted="true">
            <ion-datetime v-model="reserva.fechaInicio" displayFormat="DD:MM:YYYY" id="fechaDesde"></ion-datetime>
          </ion-modal>
        </ion-col>
        <ion-col>
          <ion-label class="letraBlanca">Fecha hasta</ion-label>
          <ion-datetime-button datetime="fechaHasta"></ion-datetime-button>

          <ion-modal :keep-contents-mounted="true">
            <ion-datetime v-model="reserva.fechaFin" id="fechaHasta"></ion-datetime>
          </ion-modal>
        </ion-col>
        <div class="letraBlanca">Habitacion: {{ this.reserva.habitacion.id }}</div>
      </ion-row>
      <ion-input class="letraBlanca" v-model="reserva.user.nombre" label="Nombre" required></ion-input>
      <ion-input class="letraBlanca" v-model="reserva.user.apellido" label="Apellido" required></ion-input>
      <ion-input class="letraBlanca" v-model="reserva.user.mail" label="Email" type="email"></ion-input>
      <ion-input class="letraBlanca" v-model="reserva.user.dni" label="DNI" required></ion-input>
      <!-- Radio buttons -->
      <ion-radio-group>
        <ion-list-header>
          <ion-label class="letraBlanca">Género</ion-label>
        </ion-list-header>
        <ion-item class="letraBlanca">
          <ion-label>Masculino</ion-label>
          <ion-radio slot="start" value="male" checked></ion-radio>
        </ion-item>
        <ion-item class="letraBlanca">
          <ion-label>Femenino</ion-label>
          <ion-radio slot="start" value="female"></ion-radio>
        </ion-item>
        <ion-item class="letraBlanca">
          <ion-label>Otro</ion-label>
          <ion-radio slot="start" value="otro"></ion-radio>
        </ion-item>
      </ion-radio-group>
      <!-- Checkboxes -->
      <ion-row>
        <ion-col>
          <ion-button type="submit" @click="getAllData(data)" color="primary" expand="block">Enviar</ion-button>
        </ion-col>
      </ion-row>
    </form>
  </ion-content>
</template>

<script>
import { IonPage, IonButton, IonContent, IonInput, IonList, IonProgressBar, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonThumbnail, IonLabel, IonItem } from '@ionic/vue'
import axios from 'axios'
import { defineComponent, ref } from 'vue';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/vue';
import reservas from '../services/reservas'

export default {
  components: { IonPage, IonButton, IonContent, IonInput, IonList, IonProgressBar, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonThumbnail, IonLabel, IonItem, IonDatetime, IonDatetimeButton, IonModal },
  methods: {
    iraHome() {
      this.$router.push("/")
    },
  },
  data() {
    return {
      reserva: {
        idReserva: null,
        habitacion: {
          id: this.$route.query.id
        },
        fechaInicio: new Date().totring,
        fechaFin: new Date().totring,
        precio: 0,
        user: {
          nombre: "",
          apellido: "",
          mail: "",
          dni: "",
          genero: ""
        }

      },
      submitted: false
    }
  },
  getAllData(data) {
    console.log('Dataaa')
    console.log(this.form)
    console.log(data)
    reservas.agregar(this.form)
    this.$router.push('/habitaciones')
  },
  setup() {
    let progress = ref(0);

    return {
      progress
    };
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
  
<style>
ion-item {
  --background: !important;
}
</style>
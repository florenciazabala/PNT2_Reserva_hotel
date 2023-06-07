<template>
  <ion-page>
  </ion-page>
  <ion-content >
    <h2> Habitaciones Disponibles</h2>
    <ion-list v-for="e in lista" :key="e.id">
      <ion-card>
        <div style="height: 10px;" :style="{ 'background-color': Date.parse(e.fechaFin) < new Date() ? 'red' : 'blue' }">
        </div>
        <ion-card-header>
          <ion-card-title>Habitacion numero #{{ e.NumeroDeHabitacion }}</ion-card-title>
          <ion-card-subtitle>Cantidad de personas máximo para la habitacion: {{ e.cantPersonas }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ion-text v-if="e.EsPremium">Habitación PREMIUM </ion-text>
          <ion-text v-if="!e.EsPremium">Habitación STANDARD </ion-text>
          <ion-text>| Precio $</ion-text>{{ e.Precio }}
          <ion-list>
            <ion-item>
              <ion-thumbnail slot="start">
                <img alt="Foto habitación" :src="e.imagen" />
              </ion-thumbnail>
              <ion-label>Item</ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>

        <ion-button @click="eliminar(e.id)" fill="clear">Eliminar</ion-button>
        <ion-button @click="modificar(e.id)" fill="clear">Modificar</ion-button>
      </ion-card>
    </ion-list>  
    <ion-button @click="cargarLista">Cargar Lista</ion-button>
    <ion-button @click="agregaraLista">Agregar</ion-button>
    <ion-button @click="ordenarLista">Ordenar</ion-button>
    <ion-button @click="iraHome">Ir a home</ion-button>
  </ion-content>
</template>
  
  <script>
  import {IonPage, IonButton, IonContent, IonInput, IonList, IonProgressBar, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonThumbnail, IonLabel, IonItem, IonText} from '@ionic/vue'
  import axios from 'axios'
  import habitaciones from '../services/habitaciones'
  
  export default {
    components: {IonPage, IonButton, IonContent, IonInput, IonList, IonProgressBar, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonThumbnail, IonLabel, IonItem, IonText},
    methods: {
      iraHome() {
        this.$router.push("/")
      },
      async agregaraLista() {
        // Falta control de ingreso de datos
        try {
          const elemento = {...this.elemento}
          await habitaciones.agregar(elemento)
          await this.cargarLista()
          this.elemento = {}
        } catch(e) {
          alert(e)
        }  
      },
      ordenarLista() {
        this.lista.sort( (a,b) => a.id - b.id  )
      },
      async cargarLista() {
        try {
          const respuesta = await habitaciones.cargarLista()
          this.lista = respuesta
        } catch(e) {
          alert(e)  
        }
      },
      async eliminar(id) {
        try {
          await habitaciones.eliminar(id)
          await this.cargarLista()
        } catch( e) {
          alert('Se produjo un error')
        }
      },
      async modificar(id) {
        try {
          const elemento = {...this.elemento}
          await habitaciones.modificar(id,elemento)
          await this.cargarLista()
          this.elemento = {}
        } catch( e) {
          alert('Se produjo un error')
        }
      }
    },
    data() {
      return {
        lista: [],
        elemento: {},
        ocultar: true
      }
    }
  }
  </script>
  
  <style>
  ion-content{
    --padding-top: 50px;
    }
  </style>
  
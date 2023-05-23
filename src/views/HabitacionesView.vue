<template>
    <ion-page>
      <ion-content>
        <h2> Habitaciones</h2>
        <ion-list v-for="e in lista" :key="e.id">
            <ion-input v-if="ocultar" v-model="elemento.id" label="Id"></ion-input> 
          {{ e.id }} {{ e.cantPersonas }} {{ e.EsPremium }} 
          <ion-button @click="eliminar(e.id)">Eliminar</ion-button>
          <ion-button @click="modificar(e.id)">Modificar</ion-button>
        </ion-list>  
        <ion-input v-if="ocultar" v-model="elemento.id" label="Id"></ion-input>
        <ion-input v-if="ocultar" v-model="elemento.cantPersonas" label="Cantidad de personas en hab:"></ion-input>
        <ion-input v-if="ocultar" v-model="elemento.EsPremium" label="es premium:"></ion-input>
        <ion-button @click="cargarLista">Cargar Lista</ion-button>
        <ion-button @click="agregaraLista">Agregar</ion-button>
        <ion-button @click="ordenarLista">Ordenar</ion-button>
        <ion-button @click="iraHome">Ir a home</ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import {IonPage, IonButton, IonContent, IonInput, IonList} from '@ionic/vue'
  import axios from 'axios'
  import habitaciones from '../services/habitaciones'
  
  export default {
    components: {IonPage, IonButton, IonContent, IonInput, IonList},
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
  
  </style>
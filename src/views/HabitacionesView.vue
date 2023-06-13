
<template>
  <ion-page>
    <ion-content
      style="
        background: url('../src/assets/hotel5.jpg') no-repeat center center
          fixed;
        background-size: cover;
      "
    >
      <h2>Habitaciones Disponibles</h2>
      <ion-list class="listNegro" v-for="e in lista" :key="e.id">
        <ion-card color="dark">
          <ion-card-header>
            <ion-card-title
              >Habitacion numero #{{ e.NumeroDeHabitacion }}</ion-card-title
            >
            <ion-card-subtitle
              >Cantidad de personas máximo para la habitacion:
              {{ e.cantPersonas }}</ion-card-subtitle
            >
          </ion-card-header>

          <ion-card-content>
            <ion-text v-if="e.EsPremium">Habitación PREMIUM </ion-text>
            <ion-text v-if="!e.EsPremium">Habitación STANDARD </ion-text>
            <ion-text>| Precio $</ion-text>{{ e.Precio }}
            <ion-list class="listNegro">
              <ion-item color="dark">
                <ion-thumbnail >
                  <img alt="Foto habitación" :src="e.imagen" />
                </ion-thumbnail>
                <ion-label>Item</ion-label>
              </ion-item>
            </ion-list>
          </ion-card-content>
          <ion-button
            color="warning"
            router-link="/reservaHabitacion"
            router-direction="back"
            >Reservar Habitación</ion-button
          >
          <ion-button
            color="warning"
            v-if="isLogin && hasPermissions('config')"
            @click="eliminar(e.id)"
            fill="clear"
            >Eliminar</ion-button
          >

          <p id="ejemplo"></p>
          <ion-button
            color="warning"
            v-if="isLogin && hasPermissions('config')"
            @click="modificar(e.id)"
            fill="clear"
            >Modificar</ion-button
          >
        </ion-card>
      </ion-list>
      <ion-button color="light" fill="outline" @click="cargarLista"
        >Cargar Lista</ion-button
      >
      <ion-button color="light" fill="outline" @click="agregaraLista"
        >Agregar</ion-button
      >
      <ion-button color="light" fill="outline" @click="ordenarLista"
        >Ordenar</ion-button
      >
      <ion-button color="light" fill="outline" @click="iraHome"
        >Ir a home</ion-button
      >
    </ion-content>
  </ion-page>
</template>
  
<script>
import {
  IonPage,
  IonButton,
  IonContent,
  IonInput,
  IonList,
  IonProgressBar,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonThumbnail,
  IonLabel,
  IonItem,
  IonText,
} from "@ionic/vue";

import axios from "axios";
import { RouterLink, RouterView, useRouter } from "vue-router";
import {IonApp, IonHeader, IonRouterOutlet } from '@ionic/vue'
import { storeToRefs } from "pinia";
import {useLoginStore} from '../stores/login'

import habitaciones from "../services/habitaciones";

export default {
  components: {
    IonPage,
    IonButton,
    IonContent,
    IonInput,
    IonList,
    IonProgressBar,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonThumbnail,
    IonLabel,
    IonItem,
    IonText,
  },

  setup() {
    const router = useRouter();
    const store = useLoginStore();
    const { isLogin, user } = storeToRefs(store);
    const { hasPermissions } = store;
    return { isLogin, user, hasPermissions, router};
  },
  
  methods: {
    
    iraHome() {
      this.$router.push("/");
    },
    async agregaraLista() {
      // Falta control de ingreso de datos
      try {
        const elemento = { ...this.elemento };
        await habitaciones.agregar(elemento);
        await this.cargarLista();
        this.elemento = {};
      } catch (e) {
        alert(e);
      }
    },
    ordenarLista() {
      this.lista.sort((a, b) => a.id - b.id);
    },
    async cargarLista() {
      try {
        const respuesta = await habitaciones.cargarLista();
        this.lista = respuesta;
      } catch (e) {
        alert(e);
      }
    },
    async eliminar(id) {
      try {
        var mensaje;
        var opcion = confirm("Clicka en Aceptar o Cancelar");
        if (opcion == true) {
          mensaje = "Has clickado OK";
          await habitaciones.eliminar(id);
        } else {
          mensaje = "Has clickado Cancelar";
        }
        document.getElementById("ejemplo").innerHTML = mensaje;

        await this.cargarLista();
      } catch (e) {
        alert("Se produjo un error");
      }
    },
    async modificar(id) {
      try {
        const elemento = { ...this.elemento };
        await habitaciones.modificar(id, elemento);
        await this.cargarLista();
        this.elemento = {};
      } catch (e) {
        alert("Se produjo un error");
      }
    },
  },
  data() {
    return {
      lista: [],
      elemento: {},
      ocultar: true,
    };
  },
};
</script>
  
<style>
h2 {
  color: white;
  padding-left: 16px;
}

.listNegro {
  background: black;
  opacity: 0.8;
}
</style>
  
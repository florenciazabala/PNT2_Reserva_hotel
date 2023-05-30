<script>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { IonButton, IonApp, IonHeader, IonContent } from "@ionic/vue";
import { storeToRefs } from "pinia";
import { useLoginStore } from "./stores/login";
import { IonNav } from '@ionic/vue';

export default {
  components: { IonApp, IonHeader, IonNav, IonButton, IonContent },
  setup() {
    const router = useRouter();
    const store = useLoginStore();
    const { isLogin, user } = storeToRefs(store);
    const { hasPermissions } = store;
    return { isLogin, user, hasPermissions, router};
  },
};
</script>

<template>
  <ion-app>
    <ion-header>
      <ion-button router-link="/" router-direction="back" :router-animation="myAnimation">Home</ion-button>
      <ion-button router-link="/about" router-direction="back" :router-animation="myAnimation">About</ion-button>
      <ion-button router-link="/habitaciones" router-direction="back" :router-animation="myAnimation">Habitaciones</ion-button>
      <ion-button router-link="/reservas" router-direction="back" :router-animation="myAnimation">Reservas</ion-button>
      <ion-button v-if="isLogin" router-link="/system" router-direction="back" :router-animation="myAnimation">System</ion-button>
      <ion-button v-if="isLogin && hasPermissions('config')" router-link="/config" router-direction="back" :router-animation="myAnimation">Config</ion-button>
      <ion-button v-if="!isLogin" router-link="/login" router-direction="back" :router-animation="myAnimation">Login</ion-button>
      <ion-button v-if="isLogin" router-link="/logout" router-direction="back" :router-animation="myAnimation">Logout</ion-button>
      <ion-label v-if="isLogin">Usuario: {{ user.email }}</ion-label>
    </ion-header>
    <RouterView />
  </ion-app>
</template>

<style>
</style>

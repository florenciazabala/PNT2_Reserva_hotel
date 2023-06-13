<script>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { IonButton, IonApp, IonHeader, IonContent, IonLabel } from "@ionic/vue";
import { storeToRefs } from "pinia";
import { useLoginStore } from "./stores/login";
import { IonNav } from '@ionic/vue';

export default {
  components: { IonApp, IonHeader, IonNav, IonButton, IonContent, IonLabel },
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
  <ion-app style="background: url('../src/assets/hotel5.jpg') no-repeat center center fixed; background-size: cover">
    <ion-header>
      <ion-button fill="clear" color="light" router-link="/" router-direction="back">Home</ion-button>
      <ion-button fill="clear" color="light" router-link="/about" router-direction="back">About</ion-button>
      <ion-button fill="clear" color="light" router-link="/habitaciones" router-direction="back">Habitaciones</ion-button>
      <ion-button fill="clear" color="light" v-if="isLogin" router-link="/reservas" router-direction="back">Reservas</ion-button>
      <ion-button fill="clear" color="light" v-if="isLogin" router-link="/system" router-direction="back">System</ion-button>
      <ion-button fill="clear" color="light" v-if="isLogin && hasPermissions('config')" router-link="/config" router-direction="back">Config</ion-button>
      <ion-button fill="clear" color="light" v-if="!isLogin" router-link="/login" router-direction="back">Login</ion-button>
      <ion-button fill="clear" color="light" v-if="isLogin" router-link="/logout" router-direction="back">Logout</ion-button>
      <ion-label color="light" v-if="isLogin">Usuario: {{ user.email }}</ion-label>
    </ion-header>
    <RouterView />
  </ion-app>
</template>

<style>

</style>

  <style>
  </style>

<template>
  <ion-app>
    <ion-header>
      <RouterLink to="/">Home |</RouterLink>
      <RouterLink to="/habitaciones">Habitaciones |</RouterLink>
      <RouterLink to="/misReservas">Reservas |</RouterLink>
      <RouterLink to="/login">Login |</RouterLink>
      <RouterLink to="/">Logout</RouterLink>
    </ion-header>
    <RouterView />
  </ion-app>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import {IonApp, IonHeader} from '@ionic/vue'
export default {
  components: {IonApp, IonHeader}
}

import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
  state: () => {
    return { isLogin: false }
  },
  actions: {
    logout() {
      this.isLogin = false
    },
    login() {
      this.isLogin = true
    },
    setup() {
      const store = useLoginStore();
      const { isLogin } = storeToRefs(store)
      return { isLogin }
    }
  },
})
</script>
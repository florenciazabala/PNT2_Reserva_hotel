<template>
  <ion-page>
    <h2>Login</h2>
    <ion-button @click="logear">Login</ion-button>
  </ion-page>
</template>

<script>
import { IonPage, IonButton } from "@ionic/vue";
import { useLoginStore } from "../stores/login";

export default {
  components: { IonPage, IonButton },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  methods: {
    logear() {
        // hardcodeo hasta la classe que viene
        // proxima clase conexion con backend
        if (this.usuario.email=="test@test.com" && this.usuario.passw=="123456") {
          this.login()
          this.$router.push('system')
        } else {
          alert('Credenciales incorrectas')
        }
    }
  }
};
</script>

<style>
</style>

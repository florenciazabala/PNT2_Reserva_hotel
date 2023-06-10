<template>
  <ion-page>
  </ion-page>
    <ion-content class="ion-padding">
      <h2>Iniciar sesión</h2>
      <ion-input class="letraBlanca" v-model="usuario.email" label="Email" type="email" errorText="Invalid email"></ion-input>
      <ion-input class="letraBlanca" v-model="usuario.passw" label="Password" type="password"></ion-input>
      <ion-button color="light" fill="outline" @click="logear">Login</ion-button>
    </ion-content>
</template>

<script>
import { IonPage, IonButton, IonContent, IonInput } from "@ionic/vue";
import { useLoginStore } from "../stores/login";

export default {
  components: { IonPage, IonButton, IonContent, IonInput },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  data() {
    return {
      usuario: {email:'',passw:''}
    }
  },
  methods: {
    logear() {
        // hardcodeo hasta la classe que viene
        // proxima clase conexion con backend
        if (this.usuario.email=="test@test.com" && this.usuario.passw=="123456") {
          this.login( { email: this.usuario.email, permissions: [] } )
          this.$router.push('/')
        } else if (this.usuario.email=="admin@test.com" && this.usuario.passw=="123456") {
          this.login( { email: this.usuario.email, permissions: ['config'] } )
          this.$router.push('config')
        } else {
          alert('Credenciales incorrectas')
        }  
    }
  }
};
</script>

<style>
.letraBlanca {
  color: white;
}
</style>

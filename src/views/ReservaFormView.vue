<template>
  <ion-page>
  </ion-page>
    <ion-content class="ion-padding">
        <form>
            <ion-item lines="full">
            <ion-label position="floating">Nombre</ion-label>
            <ion-input type="text" required></ion-input>
            </ion-item>
            <ion-item lines="full">
            <ion-label position="floating">Apellido</ion-label>
            <ion-input type="text" required></ion-input>
            </ion-item>
            <ion-item lines="full">
            <ion-label position="floating">Email</ion-label>
            <ion-input type="email" required></ion-input>
            </ion-item>
            <ion-item lines="full">
            <ion-label position="floating">DNI</ion-label>
            <ion-input type="text" required></ion-input>
            </ion-item>
            <!-- Radio buttons -->
            <ion-radio-group lines="full">
            <ion-list-header>
                <ion-label>Género</ion-label>
            </ion-list-header>
            <ion-item>
                <ion-label>Masculino</ion-label>
                <ion-radio slot="start" value="male" checked></ion-radio>
            </ion-item>
            <ion-item>
                <ion-label>Femenino</ion-label>
                <ion-radio slot="start" value="female"></ion-radio>
            </ion-item>
            <ion-item>
                <ion-label>Otro</ion-label>
                <ion-radio slot="start" value="otro"></ion-radio>
            </ion-item>
            </ion-radio-group>
            <!-- Checkboxes -->
            <ion-row>
            <ion-col>
                <ion-button type="submit" color="danger" expand="block">Enviar</ion-button>
            </ion-col>
            </ion-row>
        </form>
    </ion-content>
</template>

<script>
import { IonPage, IonButton, IonContent, IonInput, IonList, IonProgressBar, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonThumbnail, IonLabel, IonItem } from '@ionic/vue'
import axios from 'axios'
import { defineComponent, ref } from 'vue';

export default {
  components: { IonPage, IonButton, IonContent, IonInput, IonList, IonProgressBar, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonThumbnail, IonLabel, IonItem },
  methods: {
    iraHome() {
      this.$router.push("/")
    },
  },
  data() {
    return {
      lista: [],
      elemento: {},
      ocultar: true,
      colorDate: 'white'
    }
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
  
<style></style>
<template>
  <ion-page>
  </ion-page>
  <ion-content class="ion-padding">
    <h2>Logout</h2>
    <ion-button color="light" fill="outline" @click="unlogear">Logout</ion-button>
  </ion-content>
</template>

<script>
import { IonPage, IonButton } from "@ionic/vue";
import { useLoginStore } from "../stores/login";

export default {
  components: { IonPage, IonButton },
  setup() {
    const store = useLoginStore();
    const { logout } = store;
    return { logout };
  },
  methods: {
    unlogear() {
        this.logout()
        this.$router.push('/login')
    }
  }
};
</script>

<style>
</style>

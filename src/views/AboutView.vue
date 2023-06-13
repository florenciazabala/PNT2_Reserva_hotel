<template>
  <ion-page>
    <ion-content class="ion-padding" style="background: url('../src/assets/hotel5.jpg') no-repeat center center fixed; background-size: cover">
      <h2>Acerca de nuestro Hotel</h2>
        <p>Este elegante hotel de estilo art deco, ubicado en el moderno distrito costero de Puerto Madero, se encuentra a 3.4 km del centro de la ciudad y a 14 minutos a pie del Museo de Arte Moderno de Buenos Aires.</p>
        <p>Las elegantes habitaciones, muchas de ellas con balcón, cuentan con TV de pantalla plana, acceso a Wi-Fi y minibar. Las habitaciones y suites mejoradas, algunas con tina y terraza privada, incluyen área de visitas y acceso al salón de club. Se ofrece servicio a la habitación las 24 horas, todos los días.</p>
        <p>El desayuno tipo bufé es gratuito. Los servicios incluyen un restaurante elegante que ofrece cocina refinada, un moderno bar lounge y un bar de jugos en la azotea. También hay un spa con piscina cubierta, una tina, un sauna y una sala de ejercicios.</p>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonContent} from '@ionic/vue'
export default {
  components: {IonPage, IonContent}
}
</script>

  <style>
    p {
      color:white;
      width: 800px;
    }
  </style>

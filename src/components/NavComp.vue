<template>
  <div>
    <v-app-bar color="primary lighten-1" dense dark>
      <v-img
        class="mx-2"
        src="https://www.pinpng.com/pngs/m/102-1028572_logo-blanco-caf-u00e9-con-letras-facebook-logo.png"
        max-height="80"
        max-width="80"
        contain
      ></v-img>
      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">Acerca de</v-btn>
      <v-btn text to="/blog/1">Blog</v-btn>
      <v-btn text to="/suscriptors">Suscriptors</v-btn>
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in menulist" :key="n" @click="() => {}">
            <v-list-item-title>{{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      menulist: ["Inicio", "Contacto", "Galeria", "Noticias", "Proyectos"]
    }
  }
}
</script>
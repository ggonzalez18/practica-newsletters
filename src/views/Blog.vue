<template>
  <v-container>
    <h1 v-text="title"></h1>
    <comments></comments>
    <br>
    <div>
    <v-row justify="center">
    <v-btn :to="paginate(false)" class="btn btn-info mr-3"><v-icon>mdi-arrow-left-bold</v-icon> Anterior</v-btn>
    <v-btn :to="paginate(true)" class="btn btn-info">Siguiente<v-icon>mdi-arrow-right-bold</v-icon></v-btn>
    </v-row>
    </div>
    
  </v-container>
</template>

<script>
import Comments from '../components/Comments'

export default {
  components: {
    Comments
  },
  computed: {
    title () { /*titulo referenciado en el inicio de cada pagina del blog de comentarios*/
      return `Comentarios página n°${this.$route.params.post}`
    }
  },
  methods: {
    /*funcion de paginate para que siguiente y anterior funcione */
    paginate (dir) {
      const currentPost = parseInt(this.$route.params.post)
      if (dir) {
        return `/blog/${currentPost + 1}`
      } else {
        return currentPost > 1 ? `/blog/${currentPost - 1}` : `/blog/${currentPost}`
      }
    }
    /*termina funcion de paginate*/
  }
}
</script>

<style>
</style>

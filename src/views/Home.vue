<template>
  <div class="home">
<v-container>
  <v-row>
    <v-col cols="8">

    </v-col>
    <v-col cols="4">
      <news-letters></news-letters>
    </v-col>
  </v-row>
</v-container>
  </div>
</template>

<script>
import NewsLetters from '@/components/NewsLetters'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    NewsLetters
  },
  methods:{
    ...mapActions(['addSuscriptor', 'saveSubscription'])
    },
    computed: {
      ...mapState(['suscriptores', 'suscriptor'])
    },
}
</script>

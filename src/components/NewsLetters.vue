<template>
  <v-container>
    <h4>¡Suscríbete y conoce nuestras novedades!</h4>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nombre" required></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="saveSubscriptor"> Suscribir</v-btn>
    </v-form>
    <v-row justify="center">
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">¡¡FELICITACIONES {{this.nameSuscriptor}}!!</v-card-title>
            <v-card-text>Te haz suscrito correctamente, pronto te enviaremos nuestras novedades.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">CERRAR</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  data: () => ({
    dialog: false,
    nameSuscriptor: '',
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Nombre es requerido',
      v => (v && v.length <= 10) || 'tu nombre no debe exceder los 10 caracteres',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail es requerido',
      v => /.+@.+\..+/.test(v) || 'E-mail es inválido',
      ],
    }),
    methods: {
      ...mapActions(['saveSubscription', 'addSuscriptor']),
      validate () {
        this.$refs.form.validate()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      saveSubscriptor() {
        this.validate()
        this.nameSuscriptor = this.name
        let dateSuscriptor = {name: this.name, email: this.email}
        this.saveSubscription(dateSuscriptor)
        this.dialog = true
        this.name = '',
        this.email = ''
        this.resetValidation()
      }
    },
    computed: {
      ...mapState(['suscriptor', 'suscriptores'])
    }
}
</script>
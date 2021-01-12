<template>
  <div class="container">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>    
        <v-col cols="4">        
          <v-text-field v-model="users" :counter="10" :rules="nameRules" label="Name" required></v-text-field>   
        </v-col>
        <v-col cols="6">
          <v-container>   
            <v-textarea  v-model="textComments" clearable clear-icon="mdi-close-circle" label="Text" placeholder="comenta"></v-textarea>          
          </v-container>
        </v-col>
          <v-col cols="2">
            <v-btn :disabled="!valid" color="success" class="mr-4" @click="saveDate">Enviar</v-btn>
          </v-col>
      </v-row>
    </v-form>
    <v-row>
    <v-col v-for="(comment, index) in comments" :key="index" cols="3">
    <v-card class="mx-auto mb-4" color="#26c6da" dark max-width="400">
      <v-card-title><v-icon large left>mdi-twitter</v-icon>
        <span class="title font-weight-light">Twitter</span>
      </v-card-title>
      <v-card-text class="headline">
        "{{comment.textComments}}"
      </v-card-text>
      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img class="elevation-6" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{comment.users}}</v-list-item-title>
          </v-list-item-content>
          <v-row align="center" justify="end">
            <v-icon class="mr-1">mdi-heart</v-icon>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">mdi-share-variant</v-icon>
            <span class="subheading">45</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
    </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
      textComments: '',
      users: '',
      valid: true,
      nameRules: [
        v => !!v || 'Nombre requerido',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],      
    }
  },
  methods: {
     validate () {
      this.$refs.form.validate()
    },
    resetValidation () {
        this.$refs.form.resetValidation()
      },
    saveDate() {
      this.validate ()
      let com = {users: this.users, textComments: this.textComments}
      this.comments.push(com)
      this.textComments= '',
      this.users= '',
      this.resetValidation ()
      console.log(this.comments)
    }
  }
}
</script>

<style>

</style>

<template>
  <div id="container">
    <v-container>
      <v-overlay v-on:click="viewToggle">
        <v-card light elevation="6">
          <v-col cols="12" sm="12">
            <v-text-field dense label="Titre" v-model="nameInput" clearable />
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field dense label="Dernier tome" v-model.number="maxInput" clearable />
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field dense label="Résumer de la série" v-model="descrInput" clearable />
          </v-col>
          <v-btn v-on:click='addingItem'>Ajouter le livre</v-btn>
          <v-btn v-on:click='viewToggle'>Annuler la saisie</v-btn>
        </v-card>
      </v-overlay>
    </v-container>
  </div>
</template>

<script>
import {addItem} from './../../public/openDB'

export default {
  name: 'addView',
  components:{

  },
  data: () => ({
   nameInput: null,
   maxInput: null,
   descrInput: null,
  }),
  methods:{
    addingItem(){
      if(this.nameInput && this.maxInput && this.descrInput){
        addItem(this.nameInput, this.maxInput, this.descrInput)
        this.$emit('addComplete')
        this.viewToggle()
      }else{
        alert('Insert data in the form')
      }
    },
    viewToggle(){
      this.$emit('viewToggle')
    }
  }
};
</script>

<style scoped lang="scss">
#container{
  position: absolute;
  left: 20%;
  width: 50%;
}
h1{
  color: #009688;
  text-transform: uppercase;
  margin-left: 5px;
}
button{
  margin: 10px;
  text-transform: uppercase;
}
</style>

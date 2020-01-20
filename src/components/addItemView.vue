<template>
  <v-container>
    <v-card >
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
      
    </v-card>
  </v-container>
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
      }else{
        alert('Insert data in the form')
      }
      
    }
  }
};
</script>

<style scoped lang="scss">
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

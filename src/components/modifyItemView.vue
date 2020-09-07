<template>
  <div id="container">
    <v-container>
      <v-overlay v-if="ready">
        <v-card light elevation="6">
          <h1>Modifier le livre</h1>
          <v-col cols="12" sm="12">
            <v-text-field dense label="Titre" v-model="itemFind.name" clearable />
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field dense label="Dernier tome" v-model="itemFind.tomeMax" clearable></v-text-field>
          </v-col>
          <v-col cols="12" sm="12">
            <v-textarea dense label="Résumer de la série" v-model="itemFind.descr" clearable auto-grow rows="1">{{itemFind.descr}}</v-textarea>
          </v-col>
          <v-btn v-on:click='addingItem'>Modifier le livre</v-btn>
          <v-btn v-on:click='viewToggle'>Annuler la saisie</v-btn>
        </v-card>
      </v-overlay>
    </v-container>
  </div>
</template>

<script>
import {updateItem} from './../../public/openDB'
import {allItem} from './../../public/openDB'

export default {
  name: 'modifyView',
  props:{
    itemKey: null
  },
  data: () => ({
   itemFind: {
     name: null,
     tomeMax: null,
     descr: null,
     key: null
   },
   ready: false,
  }),
  methods:{
    addingItem(){
      if(this.itemFind.name && this.itemFind.tomeMax && this.itemFind.descr){
        updateItem(this.itemFind.key, this.itemFind.name, this.itemFind.tomeMax, this.itemFind.descr)
        this.$emit('updateComplete')
        this.viewToggle()
      }else{
        alert('Insert data in the form')
      }
    },
    viewToggle(){
      this.$emit('modifyToggle')
    }
  },
  created: function(){
    /* eslint-disable no-console */
    for (let i = 0; i < allItem.length; i++) {
      if(allItem[i].key === this.itemKey){
        this.itemFind.name = allItem[i].name
        this.itemFind.tomeMax = allItem[i].tomeMax
        this.itemFind.descr = allItem[i].descr
        this.itemFind.key = allItem[i].key
        this.ready = true
      }      
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

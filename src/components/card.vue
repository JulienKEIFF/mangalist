<template>
  <v-container>
      <v-card>
        <v-col>
          <h1>{{title}}</h1>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-on:click='modify'>Modifier</v-list-item>
              <v-list-item v-on:click='supress'>Suprimer</v-list-item>
            </v-list>
          </v-menu>
          <div class="last-tome">Dernier tome: {{tomeMax}}</div>
          <v-divider></v-divider>
          <div class="description">{{descr}}</div>
        </v-col>
      </v-card>
  </v-container>
</template>

<script>
import {delItem} from './../../public/openDB'
 
export default {
  name: 'Card',
  props:{
    title: String,
    tomeMax: String,
    descr: String,
    index: null
  },
  data: () => ({

  }),
  methods:{
    supress(){
      /* eslint-disable no-console */
      let obj = delItem(this.index)
      this.$emit('delete')
      obj
    },
    modify(){
      this.$emit('modifyToggle', this.index)
    }
  }
};
</script>

<style scoped lang="css">
@media screen and (min-width: 100px) and (max-width: 480px){
  h1{
    color: #009688;
    text-transform: uppercase;
    margin-left: 5px;
    display: inline-block;
    font-size: 1.2em;
    width: 80% !important;
  }
}
@media screen and (min-width: 481px) and (max-width: 700px){
  h1{
    color: #009688;
    text-transform: uppercase;
    margin-left: 5px;
    display: inline-block;
    font-size: 1.5em;
    width: 90% !important;
  }
}
@media screen and (min-width: 700px) and (max-width: 1300px){
  h1{
    color: #009688;
    text-transform: uppercase;
    margin-left: 5px;
    display: inline-block;
    width: 92% !important;
  }
}
h1{
  color: #009688;
  text-transform: uppercase;
  margin-left: 5px;
  display: inline-block;
  width: 94%;
}
.description{
  margin-top: 5px; 
  text-indent: 20px;
}
.last-tome{
  margin-bottom: 10px; 
}
</style>

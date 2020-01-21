<template>
  <v-container>
      <v-card>
        <v-col>
          <h1>{{title}}</h1>
          <v-btn icon right v-on:click='supress'>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
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
    tomeMax: Number,
    descr: String,
    index: null
  },
  data: () => ({

  }),
  methods:{
    supress(){
      /* eslint-disable no-console */
      let obj = delItem(this.index)
      console.log(obj)
      this.$emit('delete')
    },
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

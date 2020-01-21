<template>
  <v-container>
      <v-card>
          <h1>{{title}}</h1>
          <v-btn icon right v-on:click='supress'>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        <div>Dernier tome: {{tomeMax}}</div>
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
    font-size: 1.5em;
    width: 85% !important;
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
    width: 95% !important;
  }
}
h1{
  color: #009688;
  text-transform: uppercase;
  margin-left: 5px;
  display: inline-block;
  width: 96%;
}
</style>

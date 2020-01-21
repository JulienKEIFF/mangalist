<template>
  <v-container>
    <div class="root">
      <div v-for="item in items" :key=item.key>
        <card :title=item.name :tomeMax="item.tomeMax" :descr="item.descr" :index="item.key" v-if="items" v-on:delete="allItemFunction" />
      </div>
    </div>
    <div v-if="listOpen">
      <p>Cette application est encore en développement. <br> Si vous constatez des bug veuillez m'en faire part</p> 
      <v-btn id="hide" color="teal" v-on:click='allItemFunction'>Je comprends</v-btn>
    </div>
    

   <v-btn v-on:click='toggleAdd' fab color="teal" bottom right class="plus">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
   <addView v-if="add" v-on:viewToggle="toggleAdd" v-on:addComplete="allItemFunction" absolute />
  </v-container>
</template>

<script>
import card from './card.vue'
import addView from './addItemView.vue'

import {getItem} from './../../public/openDB'
import {allItem} from './../../public/openDB'

export default {
  name: 'List',
  components:{
    card,
    addView
  },
  data: () => ({
    add: false,
    items: allItem,
    listOpen: true
  }),
  methods:{
    allItemFunction(){
      getItem()
      /* eslint-disable no-console */
      this.items = allItem
      this.listOpen = false
    },
    toggleAdd(){
      this.add = !this.add
    }
  },
  beforeMount: function(){
    
  }
};
</script>

<style scoped lang="scss">
h1{
  color: #009688;
  text-transform: uppercase;
  margin-left: 5px;
}
.plus{
  position: fixed;
  top: 88%;
  left: 80%;
  color: white;
}
#hide{
  position: fixed;
  top: 50%;
  left: 30%;
  text-transform: uppercase;
  font-weight: bolder;
  width: 40%;
  height: 50px;
  color: white;
  font-size: 1.1em; 
}
p{
  position: fixed;
  top: 30%;
  left: 15%;
  width: 70%;
  font-size: 1.3em;
  text-align: center;
}
</style>

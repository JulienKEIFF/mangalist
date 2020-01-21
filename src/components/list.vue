<template>
  <v-container>
    <div class="root">
      <div v-for="item in items" :key=item.key>
        <card :title=item.name :tomeMax="item.tomeMax" :index="item.key" v-if="items" v-on:delete="allItemFunction" />
      </div>
    </div>
    <button v-on:click='allItemFunction' v-if="listOpen">Click</button>

   <v-btn fab color="teal" bottom right absolute>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
   <addView v-if="add" v-on:addComplete="allItemFunction" />
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
    add: true,
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
</style>

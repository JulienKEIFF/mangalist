<template>
  <v-container>
   <card title="Seraph of the end" listTome="Dernier tome: 16" />
   <card title="Real Account" listTome="Dernier tome: 18" />
   <card title="The rising of the shield hero" listTome="Dernier tome: 10" />
   <card title="The Isolator" listTome="Dernier tome: 2" />
   <card title="Re Zero - Arc 1" listTome="Dernier tome: 2" />
   <card title="Re zero - arc 2" listTome="Dernier tome: 5" />
   <card title="Re zero - arc 3" listTome="Dernier tome: 5" />

   <v-btn fab color="teal" bottom right absolute>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
   <addView v-if="add" />
  </v-container>
</template>

<script>
import card from './card.vue'
import addView from './addItemView.vue'

import {getItem} from './../../public/openDB'

export default {
  name: 'List',
  components:{
    card,
    addView
  },
  data: () => ({
    add: false
  }),
  methods:{
    allItem(){
      let list = getItem()
      alert(list)
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
</style>

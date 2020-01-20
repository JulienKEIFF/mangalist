<template>
  <v-container>
   <card width="100" title="Nom de la série" listTome=[1,2,3,4,5,6,7,8,9,10] />
  </v-container>
</template>

<script>
import card from './card.vue'
export default {
  name: 'List',
  components:{
    card
  },
  data: () => ({

  }),
};
</script>

<style scoped lang="scss">
h1{
  color: #009688;
  text-transform: uppercase;
  margin-left: 5px;
}
</style>

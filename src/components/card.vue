<template>
  <v-container>
    <v-row-dense>
      <v-card max-width="400">
        <h1>{{title}}</h1>
        <div>{{listTome}}</div>
      </v-card>
    </v-row-dense>
  </v-container>
</template>

<script>
export default {
  name: 'Card',
  props:{
    title: String,
    listTome: Array
  },
  data: () => ({

  }),
  methods:{
    
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

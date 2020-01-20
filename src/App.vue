<template>
  <v-app>
    <v-app-bar app color="teal" dark>
      <div class="d-flex align-center">
        <v-icon x-large @click.stop="drawer = !drawer">mdi-menu</v-icon>
        <!-- <v-icon>mdi-cellphone-arrow-down</v-icon> -->
        <h1>MANGALIST</h1>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary clipped id="menu">
      <v-list dense>

        <v-list-item v-for="item in items" :key="item.title" link>
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <list/>
    </v-content>
  </v-app>
</template>

<script>
import list from './components/list';

export default {
  name: 'App',

  components: {
    list,
  },

  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'About', icon: 'mdi-help' },
      ],
    }
  }
};
</script>

<style lang="css" scoped>
#menu{
  top: 25px;
}
.v-overlay_scrim{
  position: absolute;
  top: 57px !important;
}
.v-navigation-drawer__content{
  position: absolute;
  top: 56px !important;
}
</style>
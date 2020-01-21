<template>
  <v-app>
    <v-app-bar app color="teal" dark>
      <div class="d-flex align-center">
        <!-- <v-icon x-large @click.stop="drawer = !drawer">mdi-menu</v-icon> -->
        <h1>MANGALIST</h1>
      </div>
    </v-app-bar>
    <!-- <v-navigation-drawer v-model="drawer" absolute temporary clipped id="menu">
      <v-list >
        <v-icon>mdi-home</v-icon>
        <v-list-item-title>ACCUEIL</v-list-item-title>
      </v-list>
    </v-navigation-drawer> -->
    <v-content>
      <list />
    </v-content>
  </v-app>
</template>

<script>
import list from './components/list';
//import {exportDB} from './../public/openDB';


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
      db: null
    }
  },
  mounted: function(){
    /* eslint-disable no-console */
    let request = window.indexedDB.open("mangalist", 1)
    request.onsuccess = function(event){
      this.db = event.target.result
      console.log(event)
    }
    console.log(this.db)
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
<template>
  <v-container>

    <div class="root">
      <v-text-field outlined dense label="Rechercher un livre" v-model="search" clearable />
      <div v-for="item in filteredList" :key=item.key>
        <card :title=item.name :tomeMax="item.tomeMax" :descr="item.descr" :index="item.key" v-if="items" v-on:delete="supress" v-on:modifyToggle="toggleModify" />
      </div>
    </div>

    

    <v-btn v-on:click='toggleAdd' fab color="teal" bottom right class="plus">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <addView v-if="add" v-on:viewToggle="toggleAdd" v-on:addComplete="getDB" absolute />
    <modifyView v-if="modify" v-on:modifyToggle="toggleModify" v-on:updateComplete="getDB" :itemKey="itemKeyToPass" absolute />

  </v-container>
</template>

<script>
import card from './card.vue'
import addView from './addItemView.vue'
import modifyView from './modifyItemView.vue'

export default {
  name: 'List',
  components:{
    card,
    addView,
    modifyView
  },
  data: () => ({
    add: false,
    modify: false,
    items: [],
    search: "",
    itemKeyToPass: null,
    db: null
  }),
  methods:{
    async getDB(){
      return new Promise((resolve, reject) => {
        let request = window.indexedDB.open("mangalist", 1)
        request.onerror = e =>{
          alert('Error opening database ' + e)
          reject('error')
        }
        request.onsuccess = e =>{
          resolve(e.target.result)
        }
        request.onupgradeneeded = e =>{
          let db = e.target.result
          /* eslint-disable no-unused-vars */
          let objectStore = db.createObjectStore("mangalist", { keyPath: "key", autoIncrement: true })
        }
      })
    },
    async getItems(){
      return new Promise((resolve, reject) =>{
        
        let trans = this.db.transaction('manga','readonly');
        trans.oncomplete = () => {
          resolve(manga);
        };
        let manga = []
        let store = trans.objectStore('manga')

        store.openCursor().onsuccess = e =>{
          let cursor = e.target.result
          if(cursor){
            manga.push(cursor.value)
            manga.sort(function(a,b){
              let x = a.name.toLowerCase();
              let y = b.name.toLowerCase();
              return x < y ? -1 : x > y ? 1 : 0;
            });
            cursor.continue()
          }
        }
      })
    },

    async toggleAdd(){
      this.add = !this.add
      this.items = await this.getItems()
    },
    async toggleModify(key){
      this.itemKeyToPass = key
      this.modify = !this.modify
      this.items = await this.getItems()
    },
    async supress(){
      this.items = await this.getItems()
    }
  },
  computed: {
    filteredList() {
      return this.items.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created: async function(){
    this.db = await this.getDB()
    this.items = await this.getItems()
  }
}
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

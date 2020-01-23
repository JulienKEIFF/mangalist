let allItem = []
let db
let request = window.indexedDB.open("mangalist", 1)
let objectStore = IDBObjectStore
const exportDB = db

/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
function addItem(name, tomeMax, descr){
    let transaction = db.transaction("manga", "readwrite");
    transaction.oncomplete = function(){
        console.log('purfect')
    }
    objectStore = transaction.objectStore("manga")
    objectStore.add({ name: name, tomeMax: tomeMax, descr: descr })
}

function delItem(key){
    let transaction = db.transaction("manga", "readwrite");
    objectStore = transaction.objectStore("manga")
    objectStore.delete(key)
    transaction.onsuccess = function(){
      console.log('supression terminer')
    }
}

function getItem(){
  allItem = []
  objectStore = db.transaction("manga").objectStore("manga");
  objectStore.openCursor().onsuccess = function(event){
  let cursor = event.target.result
    if(cursor){
      let oneItem = {
        name: cursor.value.name,
        tomeMax: cursor.value.tomeMax,
        descr: cursor.value.descr,
        key: cursor.key
      }
      allItem.push(oneItem)
      allItem.sort(function(a,b){
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      cursor.continue()
    }
  }
}

function updateItem(key, name, tomeMax, descr){
  let objectStore = db.transaction("manga", "readwrite").objectStore("manga");
  let request = objectStore.get(key);
  request.onsuccess = function () {
    let object = request.result;
    object.name = name;
    object.tomeMax = tomeMax
    object.descr = descr
    let requestUpdate = objectStore.put(object);
    console.log(object)
  };
}


// Open db //
request.onerror = function () {
  alert('Open database is impossible')
};
request.onsuccess = function (event) {
  db = event.target.result;
  getItem();
}
request.onupgradeneeded = function (event) {
  db = event.target.result;
  objectStore = db.createObjectStore("manga", { keyPath: "key", autoIncrement: true });
};


export {addItem}
export {delItem}
export {getItem}
export {updateItem}
export {allItem as allItem}
export {exportDB}
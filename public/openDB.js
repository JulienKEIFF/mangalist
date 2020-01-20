let request = window.indexedDB.open("mangalist", 1)
let db = IDBDatabase
let objectStore = IDBObjectStore

request.onerror = function () {
    alert('Open database is impossible')
};
request.onsuccess = function(event){
    db = event.target.result
}
request.onupgradeneeded = function (event) {
    db = event.target.result;
    objectStore = db.createObjectStore("manga", { keyPath: "key", autoIncrement: true });
};

function addItem(name, tomeMax, descr){
    let transaction = db.transaction("manga", "readwrite");
    transaction.oncomplete = function(){
        alert('purfect')
    }
    objectStore = transaction.objectStore("manga")
    objectStore.add({ name: name, tomeMax: tomeMax, descr: descr })
}

function delItem(){

}

function getItem(){
    
}

export {addItem}
export {delItem}
export {getItem}

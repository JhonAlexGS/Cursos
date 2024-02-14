
// const 

const TABLA = 'user';

module.exports = function (injectedStore){

    let store = injectedStore;
    if(!store){
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    function upsert(dictionary_user) {
        return store.upsert(TABLA, dictionary_user);
    }

    function remove(id) {
        return store.remove(TABLA, id);
    }

    return {
        list,
        get,
        upsert,
        remove
    };
}

// module.exports = {
//     list,
// };
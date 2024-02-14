const db = {
    'user':[
        {id: '1', name:'Carlos'},
    ],
};

async function list(tabla) {
    return db[tabla] 
}

async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function remove(tabla, id) {
    db[tabla] = db[tabla].filter(function(diccionario) {
        return diccionario.id !== id;
    });

    return true;
}

async function upsert(tabla, data) {
    db[tabla].push(data);
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
};
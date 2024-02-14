const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Traer una lista con todos los usuarios
router.get('/', function (req, res){
    // res.send('Todo funcionaaaaaaaaaaaaaaaaaa');
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    // response.success(req, res, lista, 200)
});

// Traer un usuario en especifico
router.get('/:id', function (req, res){
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    // res.send('Todo funcionaaaaaaaaaaaaaaaaaa');
    // const user = Co<ntroller.get(req.params.id);
    // response.succes>s(req, res, lista, 200)
});


// Añadir un usuario en especifico
router.get('/upsert/:id/:nombre', function (req, res){

    dictionary_user = req.params

    Controller.upsert(dictionary_user)
        .then((dictionary_user) => {
            response.success(req, res, dictionary_user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    // res.send('Todo funcionaaaaaaaaaaaaaaaaaa');
    // const user = Co<ntroller.get(req.params.id);
    // response.succes>s(req, res, lista, 200)
});

// Remover un usuario en especifico
router.get('/remove/:id', function (req, res){
    Controller.remove(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    // res.send('Todo funcionaaaaaaaaaaaaaaaaaa');
    // const user = Co<ntroller.get(req.params.id);
    // response.succes>s(req, res, lista, 200)
});

module.exports = router;
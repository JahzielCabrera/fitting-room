const { Router } = require('express');
const router = Router();

const { renderBuscador,
        renderMostrarPrendas,
        buscar
    } = require('../controllers/prenda.controller');

router.get('/search', renderBuscador);

router.post('/search', buscar);

router.get('/app/:id', renderMostrarPrendas);

module.exports = router;
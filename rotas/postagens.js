const express = require('express');
const router = express.Router();

router.get('/postagens', (req, res) => {
    res.json([{
        titulo: 'Meu primeiro post',
        conteudo: 'Era uma vez, uma publicação ',
        autor: 'Edwin Lima' 
    },
    {
        titulo: 'Meu segundo post',
        conteudo: 'Era uma vez, uma publicação novamente',
        autor: 'Edwin Lima' 
    }]);
});

module.exports = router;